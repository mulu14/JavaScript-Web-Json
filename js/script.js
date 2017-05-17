/**
 * File: script.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
 */

'use_strict';
$(document).ready(function () {

    /* check the password exist in userList and retuen user name*/
    /*if the user is not on the local storage list, @return null*/

    function findPassword(username) {

        var userList = JSON.parse(window.localStorage.getItem("localUserList")); /*parse the local storage content*/
        for (i = 0; i < userList.length; ++i) {
            if (username == userList[i][0]) { /*check if the user is on the local storage list*/
                return userList[i][0]; /*return user if it match the user name*/
            }
        }
        return null;
    }

    $("#submit").click(function validate() {
        var username = document.getElementById("username").value; /*get the name of user from html file*/
        var password = document.getElementById("password").value; /*get the password of user from html file*/
        /*check if the user name and password match with user name and password*/
        if (username === findPassword(username) && password === findPassword(username)) {
            /*if the user existed in the user list*/
            /*save the user name in local storage loggedUser*/
            document.getElementById('username').style.borderColor = "green"; // turn username input field into green
            document.getElementById('password').style.borderColor = "green"; // turn password input fields into green 
            window.localStorage.setItem("loggedUser", username);
            /*if the log in sucess*/
            /*change the content of status_loged_in in to the currently login user*/
            document.getElementById("status_loged_in").innerHTML = document.getElementById("status_loged_in").textContent + username;
            if (window.localStorage.getItem(username + "Hist") == null) {


                var purch_string = "http://pub.jamaica-inn.net/fpdb/api.php?username=" + username + "&password=" + username + "&action=purchases_get";

                //send  API request and get each user purchase history
                var purchJSON = $.getJSON(purch_string);
                /*when the request is done*/
                /*return json object result*/
                purchJSON.done(function (result) {

                    var purchList = []; /*create empty array to staore individual purchase history*/

                    for (i = 0; i < result.payload.length; ++i) {

                        purchList[i] = new Array(4); /*array size of four created to store individual customer buying history*/
                        purchList[i][0] = result.payload[i].namn + " " + result.payload[i].namn2;
                        purchList[i][1] = result.payload[i].timestamp;
                        purchList[i][2] = result.payload[i].price;
                        purchList[i][3] = "1 st";
                    }
                    /* save individual buying history at variable name username */
                    window.localStorage.setItem(username + "Hist", JSON.stringify(purchList));
                    doTheRest(); /* function that set /direct upon login*/
                });
            } else {
                doTheRest();
            }
            /*The function direct user to the right page based on access right*/
            function doTheRest() {
                
                //If going to PROFILE
                if (window.localStorage.getItem("goingTo") == "profile") { /**/
                    location = "profile.html";
                
                //If gooing to CONFIRMATION
                } else if (window.localStorage.getItem("goingTo") == "confirmation") {
                    updateThings();
                    location = "confirmation.html";
                
                //If going to ADMIN
                } else if (window.localStorage.getItem("goingTo") == "admin") {
                    if (checkAdmin(username)) {
                        location = "admin.html";
                    //If not admin -> Go back to index.
                    } else {
                        location = "index.html";
                    }
                }


            }
            
        //If wrong username and pass
        } else {
            
            //Error message?
            document.getElementById('username').style.borderColor = "red"; // turn red the username input field into red
            document.getElementById('password').style.borderColor = "red"; // turn red the user password input field into green 
        }
    })


    //Checkout!
    $("#checkout").click(function () {
        /*up on checkout button click, set goingTo page to confirmation page*/
        /*up on checkout button is click, set totalAmount to the value of total value of id total value  */
        window.localStorage.setItem("goingTo", "confirmation");
        window.localStorage.setItem("totalAmount", document.getElementById("total").textContent);

        var table = document.getElementById("tBody_ID"); /* get element by id tBody_ID*/
        var tableArray = []; /*set empty array*/

        var currentDate = new Date(); /* create new day object*/

        if (+currentDate.getMinutes < 10) { /*check the minutes are less than 10*/
            var minutes = "0" + currentDate.getMinutes().toString(); /*stringify the numerical number of minutes*/
        } else {
            var minutes = currentDate.getMinutes();
        }
        
        //Make strings of the date information.
        var dateString = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
        var timeString = currentDate.getHours() + ":" + minutes;
        
        //Fill table array from table.
        for (i = 0; i < table.rows.length; i++) {
            tableArray[i] = new Array(4);
            tableArray[i][1] = dateString + " " + timeString;
            tableArray[i][0] = table.rows[i].cells[0].textContent;
            tableArray[i][2] = table.rows[i].cells[1].textContent;
            tableArray[i][3] = table.rows[i].cells[2].textContent;
        }
        
        //Save table array as cart array.
        window.localStorage.setItem("cartArray", JSON.stringify(tableArray));
        
        //If logged in, go to confirmation!
        if (window.localStorage.getItem("loggedUser") != "-1") {
            updateThings();
            location = "confirmation.html";
            
        //Not logged in, go to login!
        } else {
            location = "login.html";
        }
    })

    function updateThings() {
        
        
        //Start - Update History -------------------------------
        
            //Get history list for logged in user
            var histList = JSON.parse(localStorage.getItem(window.localStorage.getItem("loggedUser") + "Hist"));

            //Get cart array
            var tableArray = JSON.parse(localStorage.getItem("cartArray"));

            //Update history list with new items in cart array!
            for (i = 0; i < tableArray.length; i++) {
                histList.unshift(tableArray[i]);
            }

            //Save new history list!
            window.localStorage.setItem(window.localStorage.getItem("loggedUser") + "Hist", JSON.stringify(histList));
        
        //End - Update History ------------------------------



        //Start - Update Debt -------------------------------
        
            //Get user list
            var userList1 = JSON.parse(window.localStorage.getItem("localUserList"));

            //Step through user list
            for (i = 0; i < userList1.length; i++) {

                //If the user is the same as the logged in user
                if (userList1[i][0] == window.localStorage.getItem("loggedUser")) {

                    //Get balance
                    var balance = +userList1[i][3];

                    //Get total amount of the pourchase
                    var ammount = +window.localStorage.getItem("totalAmount").slice(0, -3);

                    //Remove purchase amount from balance
                    balance = balance - ammount;

                    //Update user list with new balance
                    userList1[i][3] = balance;
                }
            }

            //Save user list in localStorage
            window.localStorage.setItem("localUserList", JSON.stringify(userList1));

        //End - Update Debt ---------------------------------


        //Start - Update Machine Stock ----------------------
            
            //Get machine list from localStorage
            var machineList = JSON.parse(window.localStorage.getItem("localMachine"));
        
            //Get bought_indexes from localStorage
            var bought_indexes = JSON.parse(window.localStorage.getItem("localBoughtIndexes"));
        
            //Step through bought_indexes
            for (i = 0; i < bought_indexes.length; i++) {
                
                //If beverage is bought
                if (bought_indexes[i][0] > 0) {
                    
                    //Remove number of beverages bought from machine list.
                    machineList[i][2] = (+machineList[i][2]) - (+bought_indexes[i][0]);

                }
            }
            
            //Save machine list in localStorage!
            window.localStorage.setItem("localMachine", JSON.stringify(machineList));

        //End - Update Machine Stock ------------------------
    }

    //When logout button is pressed. Set loggedUser to -1 in localStorage and update text about logged in user!
    $("#logout").click(function () {
        window.localStorage.setItem("loggedUser", "-1");
        checkLogged();

    })
    
    //When profile button is pressed, set goingTo to profile and check if logged in.
    $("#profiletab").click(function () {
        window.localStorage.setItem("goingTo", "profile");

        if (checkLogged()) {
            location = "profile.html";
        } else {
            location = "login.html";
        }
    })
    
    //When admin button is pressed
    $("#admin_text").click(function () {
            
            //Going to = admin
            window.localStorage.setItem("goingTo", "admin");
            /*if login user is admin, direct to admin page*/
            /*if the login user is not admin direct to login page*/
            if (checkLogged() && checkAdmin(window.localStorage.getItem("loggedUser"))) {
                location = "admin.html";
            } else {
                location = "login.html";
            }
        })
        /*check the user is admin or not*/
        /*function return type is boolean*/
        /*if the user is admin, return true else return false*/
    function checkAdmin(username) {
        /*parse local user list from local storage*/
        /*check if the user is on the admin list*/
        var users = JSON.parse(window.localStorage.getItem("localUserList"));
        for (i = 0; i < users.length; i++) {
            if (users[i][0] == username) {
                if (users[i][4] == "0") {

                    return true;
                } else {
                    return false;
                }
            }
        }
    }
})


//************
// END of file script.js
//************

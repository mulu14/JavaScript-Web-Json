/**
 * File: profile.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
 */

//Get logged in user
var thisUser = window.localStorage.getItem("loggedUser");

//Get purchase history for logged in user.
var purchList = JSON.parse(window.localStorage.getItem(window.localStorage.getItem("loggedUser") + "Hist"));


//Is called when body is finished loading in HTML
function startFunction() {
    setupProfile();
}


//Populates all tables etc with history and names from API if they dont exist in localStorage
function setupProfile() {
    
    //Get the purchase list from localStorage. If it doesn't exist it will be null.
    var purchList = JSON.parse(window.localStorage.getItem(window.localStorage.getItem("loggedUser") + "Hist"));
    
    //Sets up the table. Input is the length of the purchase history.
    setupTable(purchList.length);

    //Sets up user info table.
    //The info table just displays first name, last name and debt at the top of the page.
    var table2 = document.getElementById("info_table");
    
    //Gets the user list from localStorage.
    var userListArray = JSON.parse(window.localStorage.getItem("localUserList"));
    
    //Finds full name and balance from the userList and adds it to the info table.
    for (i = 0; i < userListArray.length; i++) {
        if (userListArray[i][0] == window.localStorage.getItem("loggedUser")) {

            table2.rows[0].cells[1].innerHTML = userListArray[i][1];
            table2.rows[1].cells[1].innerHTML = userListArray[i][2];
            table2.rows[2].cells[1].innerHTML = userListArray[i][3] + " kr";
        }
    }
}

//Sets up the actual history table.
function setupTable(len) {
    
    //Steps through all items in the history.
    for (i = 0; i < len; ++i) {
        
        //Checks if the list isn't null
        if (purchList[i] != null) {
            
            //Checks if the purchase date isn't null?
            if (purchList[i][1] != null) {
                
                //Get table from ID
                var table = document.getElementById("hist_table");

                //Make a new row and add it at the bottom of the table
                var row = hist_table.insertRow(hist_table.rows.length);

                //Make every other row slighty darker
                if ((hist_table.rows.length % 2) > 0) {
                    row.style.backgroundColor = "rgba(0,0,0,0.05)";
                }

                //Add the three cells
                var cell_date = row.insertCell(0); //Purchase date
                var cell_name = row.insertCell(1); //Beverage name
                var cell_price = row.insertCell(2); //Beverage price
                var cell_quantity = row.insertCell(3); //Beverage quantity

                //Populate cells with info
                cell_date.innerHTML = purchList[i][1].slice(0, 10) + "&nbsp &nbsp &nbsp" + purchList[i][1].slice(10, 16); //Date and time
                cell_name.innerHTML = purchList[i][0];  //Name of beverage
                cell_price.innerHTML = purchList[i][2]; //Price of beverage
                cell_quantity.innerHTML = purchList[i][3]; //Number of beverage bought
                cell_quantity.style.textAlign = "center";
            }
        }
    }
}


//************
// END of file profile.js
//************

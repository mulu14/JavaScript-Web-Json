/**
 * File: localStorage.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido
 */

/*  SCRIPT PURPOSE:
    This script will be called first thing in index.html before anything else and its purpose is to check if
    the lists of users and beverages exists in localStorage or not. If they don't, lists from the database
    will be downloaded and stored locally as a starting point. Later, when the system is used, only the local
    lists will be changed and read from.
*/

//localStorage.clear();


//----------| localUserList |----------
var userList = []; /*array to save user list*/

if (window.localStorage.getItem("localUserList") == null) { /*check if the local storage is empty */
    console.log("Ingen localUserList existerar --> Skapa en ny från databas!");
    /*var userThing store API request to server*/
    var userThing = $.getJSON('http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=iou_get_all');
    /*When server request is successful/done*/
    /* It retuen JSON object 'result '*/
    /*Save only user information*/

    userThing.done(function (result) {

        for (i = 0; i < result.payload.length; ++i) {
            userList[i] = new Array(5); /*array list to save each user information*/
            userList[i][0] = result.payload[i].username; //0 = Username
            userList[i][1] = result.payload[i].first_name //1 = First name
            userList[i][2] = result.payload[i].last_name; //2 = Last name
            userList[i][3] = result.payload[i].assets;
            userList[i][4] = 3;
            /*switch to check if the user name include listed admin names, if so the user information last element set to e zero*/
            switch (userList[i][0]) {
                case "jorass":
                case "ervtod":
                case "hirchr":
                case "saskru":
                case "svetor":
                    userList[i][4] = 0;
            }
        }
        window.localStorage.setItem("localUserList", JSON.stringify(userList)); /*storelist in variable localUserList*/
    });


} else {
    
}



//----------| localBevList |----------
var tempBevList = []; /*array list for beer */

if (window.localStorage.getItem("localBevList") == null) { /*check if the loacal storage for beer list is empty*/
    /* store API resquest in the bevInventory variable */
    var bevInventory = $.getJSON('http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=inventory_get');
    /* When the request is done/successful*/
    /* It retuen JSON object 'result '*/
    bevInventory.done(function (result) {

        for (i = 0; i < result.payload.length; ++i) {
            var temp = new Array(5); /*array list to save each beer information*/
            temp[0] = result.payload[i].namn + " " + result.payload[i].namn2;
            temp[1] = result.payload[i].price;
            temp[2] = result.payload[i].count;
            temp[3] = result.payload[i].beer_id;
            temp[4] = false;


            if (temp[2] < 0) {
                temp[2] = +temp[2] * -1; /*convert negative count of beer into positive*/
            }

            if (temp[0] != " ") { /*while name are not empty push the beer information into tempBevList*/
                tempBevList.push(temp);

            }

        }
        window.localStorage.setItem("localBevList", JSON.stringify(tempBevList)); /* store beer information in local storage variable name localBevList*/

    });
} else {

}

//************
// END of file localStorage.js
//************

/**
 * File: logged.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
 */

//Checks if a user is loggefd in and updates "Logged in as: "-text if a user is logged in and hides it if nobody is logged in.
//Also return true or false, where true means someone is logged in.
function checkLogged() {

    var user = window.localStorage.getItem("loggedUser");

    //Om inloggad
    if ((user != "-1") && (user != null)) {
        document.getElementById("status_loged_in").innerHTML = "Signed in as:  &nbsp " + getFullName(user) + "";


        return true;

    } else {
        console.log("EJ INLOGGAD -> SKA VARA -1: " + user);
        document.getElementById("logout").style.visibility = "hidden";
        return false;
    }


}

//Gets the full name of a user, when the input is his or her username.
function getFullName(user) {
    var userList = JSON.parse(window.localStorage.getItem("localUserList"));

    for (i = 0; i < userList.length; i++) {
        if (userList[i][0] == user) {
            return (userList[i][1] + " " + userList[i][2]);
            break;
        }
    }
}

//************
// END of file logged.js
//************

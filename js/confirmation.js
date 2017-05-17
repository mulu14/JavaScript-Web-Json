/**
 * File: confirmation.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
 */

//Get the array with all bought items in the cart from localStorage
var cartArray = JSON.parse(window.localStorage.getItem("cartArray"));

//Is called when body of confirmation.HTML has finished loading.
function start_conf() {
    
    //Initialize total_prize:
    var total_price = 0;
    
    //Initialize reciept table:
    var recTable = document.getElementById("reciept_table");
    
    //For each item on the reciept:
    for (i = 0; i < cartArray.length; i++) {
        
        //Create a new row in reciept_table
        var row = reciept_table.insertRow(reciept_table.rows.length);

        //Make every other row slighty darker for visibility
        if ((reciept_table.rows.length % 2) > 0) {
            row.style.backgroundColor = "rgba(0,0,0,0.05)";
        }

        //Add the three cells
        var cell_name = row.insertCell(0); //Beverage name
        var cell_price = row.insertCell(1); //Beverage price
        var cell_quantity = row.insertCell(2); //Beverage quantity

        //Populate cells with info from the cart array obtained from localStorage.
        cell_name.innerHTML = cartArray[i][0];
        cell_price.innerHTML = cartArray[i][2];
        cell_quantity.innerHTML = cartArray[i][3];
        
        //Should be in css...
        cell_quantity.style.textAlign = "center";
        
        //For each item, add up the total price.
        total_price = total_price + ((+cartArray[i][2]) * (+cartArray[i][3].slice(0, -2)));
        total_price = +total_price.toFixed(2);
    }


    //Update the total price in the table.
    document.getElementById("total").innerHTML = total_price + " kr";
    
    //Update the current balance element.
    document.getElementById("balance_text").innerHTML = "Your balance: " + getBalance();



}

//A function to get the balance of the currently logged in user.
function getBalance() {
    
    //Get user list from localStorage.
    var userListArray = JSON.parse(window.localStorage.getItem("localUserList"));
    
    //Loop through userList
    for (i = 0; i < userListArray.length; i++) {
        
        //If the current user is the same as the currently logged in user, return the users balance.
        if (userListArray[i][0] == window.localStorage.getItem("loggedUser")) {
            return +userListArray[i][3].toFixed(2) + " kr";
        }

    }
}

//************
// END of file confirmation.js
//************

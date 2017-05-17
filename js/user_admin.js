/**
 * File: user_admin.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
 */


//Get user list from localStorage
var userList = JSON.parse(window.localStorage.getItem("localUserList"));
var freshUser = false;

//Populates the user table.
function populateUserTable() {
    
    //add eventlistener for lick on add user button.
    document.getElementById("add_user").addEventListener("click", addUser);
    
    //Get user table from ID
    var user_table = document.getElementById("user_table");
    
    //Delete all rows in the table
    while (user_table.rows.length > 0) {
        user_table.deleteRow(0);
    }
    
    //Step though the user list.
    for (i = 0; i < userList.length; ++i) {
        
        //Make a new row and add it at the bottom of the table
        var row = user_table.insertRow(user_table.rows.length);

        //Make every other row slightly darker (who cares...)
        if ((user_table.rows.length % 2) > 0) {
            row.style.backgroundColor = "rgba(0,0,0,0.05)";
        }

        //Add the four cells
        var cell_username = row.insertCell(0);
        var cell_first_name = row.insertCell(1);
        var cell_last_name = row.insertCell(2);
        var cell_assets = row.insertCell(3);
        var cell_button = row.insertCell(4);
        
        //Add edit button
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Edit";
        btn.addEventListener("click", editUser);
        btn.style.width = "40px";
        btn.style.lineHeight = "20px";
        btn.id = "a" + i;
        
        //Fill cells with the corresponding info from the user list.
        cell_username.innerHTML = userList[i][0];
        cell_first_name.innerHTML = userList[i][1];
        cell_last_name.innerHTML = userList[i][2];
        cell_assets.innerHTML = userList[i][3];
        cell_button.appendChild(btn);
    }

}

//Is called when the Add user button is pressed.
function addUser() {
    
    var newUser = Array(5);
    newUser[0] = "";    //Username
    newUser[1] = "";    //First name    
    newUser[2] = "";    //Last name
    newUser[3] = 0;     //Assets
    newUser[4] = 3;     //3 = not admin, 0 = admin.
    
    //Add the new user to the userList
    userList.unshift(newUser);
    
    //Save the userList to localStorage
    window.localStorage.setItem("localUserList", JSON.stringify(userList));
    
    //Repopulate the user table to update
    populateUserTable();
    
    //Fresh user = true.
    freshUser = true;
    
    //Click the new users edit button, to let the admin edit user info of the new user direcly without having to press edit.
    document.getElementById("a0").click();

}


//Is called when the edit button next to a user is pressed
function editUser() {
    
    //Get user table from ID
    var user_table = document.getElementById("user_table");
    
    //Removes the a from the id of the button. The ID:s are a0, a1, a2 etc. This makes is 0 if it is a0.
    this_id = this.id.substring(1);
    
    //Console log for bugs...
    console.log(this_id);
    
    //If pressing the Edit button.
    //Change all fields to be editable.
    if (this.innerHTML == "Edit") {

        //Username
        var usernameInput = document.createElement("INPUT");
        usernameInput.type = "text";
        usernameInput.value = userList[this_id][0] + "";

        user_table.rows[this_id].deleteCell(0);
        user_table.rows[this_id].insertCell(0);
        user_table.rows[this_id].cells[0].append(usernameInput);

        //First Name
        var firstnameInput = document.createElement("INPUT");
        firstnameInput.type = "text";
        firstnameInput.value = userList[this_id][1] + "";

        user_table.rows[this_id].deleteCell(1);
        user_table.rows[this_id].insertCell(1);
        user_table.rows[this_id].cells[1].append(firstnameInput);

        //Last Name
        var lastnameInput = document.createElement("INPUT");
        lastnameInput.type = "text";
        lastnameInput.value = userList[this_id][2] + "";

        user_table.rows[this_id].deleteCell(2);
        user_table.rows[this_id].insertCell(2);
        user_table.rows[this_id].cells[2].append(lastnameInput);

        //Debt
        var debtInput = document.createElement("INPUT");
        debtInput.type = "text";
        debtInput.value = userList[this_id][3] + "";

        user_table.rows[this_id].deleteCell(3);
        user_table.rows[this_id].insertCell(3);
        user_table.rows[this_id].cells[3].append(debtInput);

        //Change text in button to done.
        user_table.rows[this_id].cells[4].children[0].innerHTML = "Done";
    }

    //When pressing "Done"-button
    else {

        //Get string from input fields:
        var firstName = document.getElementById("user_table").rows[this_id].cells[1].children[0].value;
        var lastName = document.getElementById("user_table").rows[this_id].cells[2].children[0].value;
        var username = document.getElementById("user_table").rows[this_id].cells[0].children[0].value;
        var assets = document.getElementById("user_table").rows[this_id].cells[3].children[0].value;

        //Change username cell to plain text with value from input field:
        user_table.rows[this_id].deleteCell(0);
        user_table.rows[this_id].insertCell(0);
        user_table.rows[this_id].cells[0].innerHTML = username;

        //Change first name cell to plain text with value from input field:
        user_table.rows[this_id].deleteCell(1);
        user_table.rows[this_id].insertCell(1);
        user_table.rows[this_id].cells[1].innerHTML = firstName;

        //Change last name cell to plain text with value from input field:
        user_table.rows[this_id].deleteCell(2);
        user_table.rows[this_id].insertCell(2);
        user_table.rows[this_id].cells[2].innerHTML = lastName;

        //Change assets cell to plain text with value from input field:
        user_table.rows[this_id].deleteCell(3);
        user_table.rows[this_id].insertCell(3);
        user_table.rows[this_id].cells[3].innerHTML = assets;

        //Change back button to "Edit"
        user_table.rows[this_id].cells[4].children[0].innerHTML = "Edit";

        //Update user list
        userList[this_id][0] = username;
        userList[this_id][1] = firstName;
        userList[this_id][2] = lastName;
        userList[this_id][3] = assets;
        
        //Save user list in localStorage yo!
        window.localStorage.setItem("localUserList", JSON.stringify(userList));

        //IF this edit was because a new user just was added, make a purchase history for this user!
        //And set freshUser to false to indicate the creatiion of the new user is done.
        if (freshUser) {
            console.log(userList[0][0]);
            window.localStorage.setItem(userList[0][0] + "Hist", JSON.stringify(new Array(4)));
            freshUser = false;
        }
    }

}

//************
// END of file user_admin.js
//************

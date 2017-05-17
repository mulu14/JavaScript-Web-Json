/**
 * File: admin.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
 */

//Get the beverageList from localStorage.
var bevList = JSON.parse(window.localStorage.getItem("localBevList"));

//Initialize a machine array.
var machine = [];

//Log of beverageList
console.log(bevList);


//Checks if localMachine in localStorage isn't undefined, ie exists and if it does, get that.
//If not, let it be and empty array.
//(These might be unnessecary in this verison, haven't checked).
if (window.localStorage.getItem("localMachine") !== 'undefined') {
    machine = JSON.parse(window.localStorage.getItem("localMachine"));
} else {
    machine = [];
}

//Function to open a tab. Is called directly from HTML when the tabs are pressed...
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("options");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }


    //Pure css style modifications, should be moved to css and handeles with classes here probably.
    if (tabName == "Beverages") {
        document.getElementById("user_tab").style.backgroundColor = "#f3f3f3";
        document.getElementById("bev_tab").style.backgroundColor = "white";

        document.getElementById("bev_tab").style.borderBottom = "1px solid white";
        document.getElementById("user_tab").style.borderBottom = "1px solid gray";

        document.getElementById("user_tab").style.boxShadow = "inset 2px -2px 4px 0px rgba(0,0,0,0.15), 2px 0px 4px 0px rgba(0,0,0,0.15)";
        document.getElementById("bev_tab").style.boxShadow = "none";

        //More css styling depending on which tab is open...
    } else {
        document.getElementById("user_tab").style.backgroundColor = "white";
        document.getElementById("bev_tab").style.backgroundColor = "#f3f3f3";

        document.getElementById("user_tab").style.borderBottom = "1px solid white";
        document.getElementById("bev_tab").style.borderBottom = "1px solid gray";

        document.getElementById("bev_tab").style.boxShadow = "inset 2px -2px 4px 0px rgba(0,0,0,0.15)";
        document.getElementById("user_tab").style.boxShadow = "0px 3px 0 0 white, 2px 0px 4px 0px rgba(0,0,0,0.15), -2px 0px 4px 0px rgba(0,0,0,0.15)";

    }

    document.getElementById(tabName).style.display = "block";
}

//The machine table is the right table in the admin beverage page and displays all beverages currently placed in the machine.
//This function populates the machine table with whatever is stored in localStorages localMachine item.
function populateMachineTable() {

    //Get the machine table from ID.
    var machine_table = document.getElementById("machine_table");

    //Clear the entire table. Delete all rows.
    while (machine_table.rows.length > 0) {
        machine_table.deleteRow(0);
    }

    //If machine isn't actually null (might not be nessecary any more, not sure)
    if (machine != null) {

        //numBev is just a counter, showing how many beverage types are currently in the machine. Ex. (5/20) if five are selected.
        var numBev = document.getElementById("numBev");

        //Update numBev with the current number of beverages in the machine.
        numBev.innerHTML = machine.length + "/20";

        //Step through all beverages in the machine array.
        for (i = 0; i < machine.length; i++) {

            //console.log("machine loop " + i);

            //Make a new row and add it at the bottom of the table
            var row = machine_table.insertRow(machine_table.rows.length);

            //Make every other row darker.
            if ((machine_table.rows.length % 2) > 0) {
                row.style.backgroundColor = "rgba(0,0,0,0.05)";
            }

            //Add the three cells
            var cell_button = row.insertCell(0); //Button
            var cell_name = row.insertCell(1); //Beverage name
            var cell_price = row.insertCell(2); //Beverage price
            var cell_count = row.insertCell(3); //Beverage count

            //Fill cells with corresponding info from machine array.
            cell_name.innerHTML = machine[i][0];
            cell_price.innerHTML = machine[i][1];
            cell_count.innerHTML = machine[i][2];

            //Create a button with a left arrow for removing beverages from the machine.
            var btn = document.createElement("BUTTON");

            //Event listener, calls clickDelete.
            btn.addEventListener("click", clickDelete);

            //Button text
            btn.innerHTML = "←";

            //Button id is set to row index
            btn.id = machine_table.rows.length - 1;


            //console.log(btn.id);

            //If a beverage has zero items in the machine. It will be highlighted red.
            //The rest is just style formating to match the rows and make every other one slightly darker.
            if ((i % 2) > 0) {
                console.log(row.cells[3].textContent);
                if (row.cells[3].textContent == 0) {
                    row.style.backgroundColor = "rgba(198, 125, 125, 0.3)"

                } else {
                    row.style.backgroundColor = "#f3f3f3";

                }
            } else {
                if (row.cells[3].textContent == 0) {
                    row.style.backgroundColor = "rgba(198, 125, 125, 0.5)"


                } else {
                    row.style.backgroundColor = "rgba(0,0,0,0.05)";

                }
            }

            //Saves the machine. Probably not needed here since it hasn't been changed
            saveMachine();

            //Appens the button to the correct cell in the table.
            cell_button.appendChild(btn);
        }
    }

}

//Populate the stock table, which is the left table in the administrator beverage page.
function populateStockTable() {

    //Add button listener to the Edit button, and couple it to editBev function.
    document.getElementById("edit_bev").addEventListener("click", editBev);

    //Get table form ID
    var stock_table = document.getElementById("stock_table");

    //Delete all rows in the table
    while (stock_table.rows.length > 0) {
        stock_table.deleteRow(0);
    }

    //Step thorough the bevlist
    for (i = 0; i < bevList.length; ++i) {

        //if (bevList[i][0] != " ") {


        //Make a new row and add it at the bottom of the table
        var row = stock_table.insertRow(stock_table.rows.length);


        //Make all the selected beverages green, for easier identification
        if ((stock_table.rows.length % 2) > 0) {
            if (bevList[i][4] == false) {
                row.style.backgroundColor = "rgba(0,0,0,0.05)";
            } else {
                row.style.backgroundColor = "rgba(153, 198, 125, 0.5)";
            }
        } else {
            if (bevList[i][4] == false) {
                row.style.backgroundColor = "#f3f3f3";
            } else {
                row.style.backgroundColor = "rgba(153, 198, 125, 0.3)";
            }
        }

        //Add the three cells
        var cell_name = row.insertCell(0); //Beverage name
        var cell_price = row.insertCell(1); //Beverage price
        var cell_count = row.insertCell(2); //Beverage count
        var cell_button = row.insertCell(3); //Button

        //Add button
        var btn = document.createElement("BUTTON");
        btn.addEventListener("click", clickToRight);
        btn.innerHTML = "→";
        btn.id = i;

        //Populate cells
        cell_name.innerHTML = bevList[i][0];
        cell_price.innerHTML = bevList[i][1];
        cell_count.innerHTML = bevList[i][2];
        cell_button.appendChild(btn);

        //}

    }

}

//Is called when the Edit beverage button is pressed.
function editBev() {

    console.log("Edit bev");

    //Get table from ID.
    var table = document.getElementById("stock_table");

    //If pressing the EDIT button.
    if (this.innerHTML == "Edit") {

        //Step thought the whole table and make all fields editable.
        for (i = 0; i < table.rows.length; i++) {

            //Name
            var nameInput = document.createElement("INPUT");
            nameInput.type = "text";
            nameInput.value = table.rows[i].cells[0].textContent + "";
            nameInput.style.width = "92%";
            nameInput.style.lineHeight = "25px";
            nameInput.style.paddingLeft = "10px";

            //Replace the cell
            table.rows[i].deleteCell(0);
            table.rows[i].insertCell(0);
            table.rows[i].cells[0].append(nameInput);



            //Price
            var priceInput = document.createElement("INPUT");
            priceInput.type = "text";
            priceInput.value = table.rows[i].cells[1].textContent + "";
            priceInput.style.width = "70%";
            priceInput.style.lineHeight = "25px";
            priceInput.style.paddingLeft = "10px";

            //Replace the cell
            table.rows[i].deleteCell(1);
            table.rows[i].insertCell(1);
            table.rows[i].cells[1].append(priceInput);



            //Count
            var countInput = document.createElement("INPUT");
            countInput.type = "text";
            countInput.value = table.rows[i].cells[2].textContent + "";
            countInput.style.width = "70%";
            countInput.style.lineHeight = "25px";
            countInput.style.paddingLeft = "10px";

            //Replace the cell
            table.rows[i].deleteCell(2);
            table.rows[i].insertCell(2);
            table.rows[i].cells[2].append(countInput);


            //Change the text of the button to "Done"
            document.getElementById("edit_bev").innerHTML = "Done";

        }


    }

    //When pressing "Done"-button
    else {

        //Step through the list again and change it all back to non editable fields.
        for (i = 0; i < table.rows.length; i++) {

            //Get string from input fields:
            var name = document.getElementById("stock_table").rows[i].cells[0].children[0].value;
            var price = document.getElementById("stock_table").rows[i].cells[1].children[0].value;
            var count = document.getElementById("stock_table").rows[i].cells[2].children[0].value;

            //Change name cell to plain text with value from input field:
            table.rows[i].deleteCell(0);
            table.rows[i].insertCell(0);
            table.rows[i].cells[0].innerHTML = name;

            //Change price cell to plain text with value from input field:
            table.rows[i].deleteCell(1);
            table.rows[i].insertCell(1);
            table.rows[i].cells[1].innerHTML = price;

            //Change count cell to plain text with value from input field:
            table.rows[i].deleteCell(2);
            table.rows[i].insertCell(2);
            table.rows[i].cells[2].innerHTML = count;


            //Change back button to "Edit"
            document.getElementById("edit_bev").innerHTML = "Edit";

            //Save the new names to the beverage array:
            bevList[i][0] = name;
            bevList[i][1] = price;
            bevList[i][2] = count;

        }

        //Save the beverage list in localStorage
        window.localStorage.setItem("localBevList", JSON.stringify(bevList));

        //Update the mahcine and machine table with the new names or whatever changed.
        for (i = 0; i < machine.length; i++) {
            machine[i][0] = bevList[machine[i][4]][0];
            machine[i][1] = bevList[machine[i][4]][1];
            //machine[i][2] = bevList[machine[i][4]][2];
            saveMachine();
        }

        populateMachineTable();
        populateStockTable();
    }
}

//Is called when the button with the -> arrow is clicked. Calls addToMachine.
function clickToRight() {
    addToMachine(this.id);
}

//Is called when the button with the <- arrow is clicked. Calls deleteFromMachine and updates tables.
function clickDelete() {
    deleteFromMachine(this.id);
    populateStockTable();
    populateMachineTable();
}

//Is called when a beverage is added to the machine.
function addToMachine(butID) {

    console.log(butID)

    //Get table from ID
    var machine_table = document.getElementById("machine_table");

    //If machine talbe doesnt exist, make a new one exist, please!
    //(This is because I THINK the entire table is deleted if the last row is deleted. Maybe. It bugged and works if this is added).
    if (machine_table == null) {
        machine_table = document.createElement('tbody');
        machine_table.id = "machine_table";
        console.log(document.getElementById("machine_table_table"));
        document.getElementById("machine_table_table").appendChild(machine_table);

        console.log("Skapat nytt machine_table");
        console.log(machine_table);
    }

    //Only add a new beverage to machine if there is room in the machine, ie less than 20.
    if (machine_table.rows.length < 20) {

        //Is true if the beverage is curentlty in the machine.
        bevList[butID][4] = true;

        //Om machine finns och inte är tom, sätt index till längden
        if ((typeof machine !== "undefined") && (machine != null)) {
            var j = machine.length;
        }

        //Annars, skapa en maskin och sätt index till 0;
        else {
            machine = [];
            j = 0;
        }


        //Check if beverage is already added (same = true)!
        var same = false;
        var sameIndexMachine = -1;
        for (i = 0; i < machine.length; i++) {
            if (+bevList[butID][3] == machine[i][3]) {
                console.log("SAME");
                same = true;
                sameIndexMachine = i;
            }
        }

        //If beverage is not in machine --> Add beverage to machine
        if (!same) {
            //På angivet index, lägg till en array om 4 och spara 
            //namn, pris, count och beer_id.
            machine[j] = new Array(5);
            machine[j][0] = bevList[butID][0]; //Name
            machine[j][1] = bevList[butID][1]; //Price
            machine[j][2] = 0;
            machine[j][3] = bevList[butID][3]; //beer_id
            machine[j][4] = butID;

            //Number of the beverage in the machine before the button was pressed.
            var oldMachineCount = +machine[j][2];

            //Number of the beverage in the stock before the button was pressed.
            var oldStockCount = +bevList[butID][2];


            //console.log(+bevList[butID][2]);

            //If there are more than 10 availible in stock -> Add 10!
            if (oldStockCount > 10) {
                machine[j][2] = 10; //Add 10 to machine
                bevList[butID][2] = oldStockCount - 10; //Remove 10 from oldStock

                //Else, if there are less than 10 availible, add all availible.
            } else {
                machine[j][2] = oldStockCount; //Add all in oldStockCount
                bevList[butID][2] = 0; //Make the stock zero.
            }

            //Else if the beverage is already in the machine.
            //The functionality is supposed to be that if you press add when it already exists, 
            //it should fill the machine as much as possible with the selected beverage.

            //So if there are 20 in stock and 7 in the machine and the button is pressed. 
            //Three (3) should be added, leaving the stock at 17 and the machine at 10.

            //However, if there arent enough to completely fill the machine, then add all availible.
            //For example, there are 3 in stock and 5 in machine. Click --> stock is zero and machine is now 8.
        } else {
            var oldMachineCount = +machine[sameIndexMachine][2];
            var oldStockCount = +bevList[butID][2];

            console.log(oldMachineCount);
            console.log(oldStockCount);

            if (+bevList[butID][2] > 10) {
                console.log("Fler än 10");
                machine[sameIndexMachine][2] = 10;
                bevList[butID][2] = +(bevList[butID][2]) - 10 + oldMachineCount;
            } else {
                machine[sameIndexMachine][2] = oldMachineCount + oldStockCount;
                bevList[butID][2] = 0;
            }
        }

        //Save bevList
        window.localStorage.setItem("localBevList", JSON.stringify(bevList));

        //Save machine in localStorage
        saveMachine();

        //Repopulate tables to make them right.
        populateStockTable();
        populateMachineTable();
    }
}

//Called when the <-- arrow is pressed and is supposed to delete the row in the machine table and add the number of beverages in the machine to the general stock.
function deleteFromMachine(index) {
    console.log("Rows: " + machine_table.rows.length);

    bevList[machine[index][4]][2] = +bevList[machine[index][4]][2] + +machine[index][2]; //Update bevList wih added beverages from machine
    bevList[machine[index][4]][4] = false; //False = not in machine.

    //Get table from ID.
    machine_table = document.getElementById("machine_table");

    //Delete row at index.
    machine_table.deleteRow(index);

    //Delete element im machine array.
    machine.splice(index, 1);

    //Fixes a bug where the last element to be removed messed everything up. 
    //Basically adds a new table which is exactly the same.
    if (machine_table.rows.length == 0) {
        machine_table = document.createElement('tbody');
        machine_table.id = "machine_table";
        console.log(document.getElementById("machine_table_table"));
        document.getElementById("machine_table_table").appendChild(machine_table);
        console.log(machine_table);
    }

    //Save machine.
    saveMachine();

    window.localStorage.setItem("localBevList", JSON.stringify(bevList));

}

//Saves the machine array in localStorage!
function saveMachine() {
    window.localStorage.setItem("localMachine", JSON.stringify(machine));

}

//************
// END of file admin.js
//************

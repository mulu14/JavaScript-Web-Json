/**
 * File: index.js
 *
 * This file contains the javaScript needed to XXX
 *
 * Version 1.0
 * Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
 */




/*  --| Explanation of variable bought_indexes |-- 
    The array bought_indexes is an array containg 20 slots, one for each beverage in
    the machine. Each slot in the array can hold 2 values (an array with length 2).
    The first value is how many beverages of that index that have been bought in this
    session. So if the first beverage (id = 0) has been bought two times, the first value
    in this array at index 0 (bought_indexes[0][0]) will be 2. If the beverage is at the
    top most row (0th row) in the table, then the second value at index 0 
    (bought_indexes[0][1]) will be 0. 
    
    (bought_indexes is a global variable which means all funtions in the script can see it)
*/


var local_machine = JSON.parse(window.localStorage.getItem("localMachine"));
var bought_indexes = new Array(20);


//Will be called first thing when the page body has completed loading
function initialize() {

    updateNames();

    //Populate bought_indexes with zeros
    for (i = 0; i < bought_indexes.length; i++) {
        bought_indexes[i] = new Array(3); //Each array element is another array with length 2
        bought_indexes[i][0] = 0; //Numbers of beverages in the cart
        bought_indexes[i][1] = 0; //Row number in the table of the beverage
    }

    for (j = 0; j < 20; j++) {
        document.getElementById('' + j).addEventListener("click", clickBeverage)
    }

    //Hide the table first, to allow the tips to be shown instead
    document.getElementById("table_ID").style.visibility = "hidden";
}


//Called when a beverage is clicked. Calls addBeverage which handles the logic of adding a new beverage.
function clickBeverage() {
    addBeverage(this.id);
}



//Updates the names and prices of all the items in the machine. The ID:s of the items in the machine is simply the numbers 0-19, corresponding to their index.
function updateNames() {
    var string;
    
    //If local_machine actually exists, which means an admin has saved some beverages in the machine.
    if (local_machine != null) {
        
        //Step though all ID:s of the items in the machine
        for (i = 0; i < 20; i++) {
            
            //The machine doesn't nessecary has to have 20 items. It can hold fewer. 
            //So if the current machine slot is actuallt occupied by a beverage:
            if (i < local_machine.length) {
                
                //Update the item slot which the correct name, price and count. Taken from local_machine which is localstorage with all beverages in the machine.
                var name = local_machine[i][0];
                var price = local_machine[i][1];
                var count = local_machine[i][2];
                
                //Update HTML with the values above.
                document.getElementById("" + i).children[0].children[3].innerHTML = name;
                document.getElementById("" + i).children[0].children[4].innerHTML = price;
                document.getElementById("" + i).children[0].children[0].children[0].innerHTML = count;

                //The images displayed in the machine are manually added and always saved as the first word of the beverage name.
                //This line cuts the name of the beverage to only take the first word.
                //For example if the beverage is Anchor Steam Beer, the variable string = Anchor.
                string = name.substr(0, name.indexOf(' '));
                
                //The image element is retrieved and placed in a variable.
                //Remember, the ID of the machine slot is the same as i, hence ("" + i), which is just i.
                //The children is just to get the actual image element inside the machine slot div element.
                var bevImg = document.getElementById("" + i).children[0].children[1];
                
                //Changes the source of the image to the corresponding image.
                //So with Anchor Steam Beer, the source will be "img/bevs/Anchor.png". (Capital A, since thats what was in the name)
                bevImg.src = "img/bevs/" + string + ".png";
                
                //An even listener is added to the image in case to such image exists in the img/bevs folder.
                //If there isn't one, the function errorFunc will be called, which will supply a placeholder image.
                bevImg.addEventListener("error", errorFunc);


            //If this index isn't occupied by a beverage the beverage slot should be hidden.
            //For example if 5 beverages are added to the mahcine, then slots (and ID:s) 5-19 will fall under this else, instead of the idf above.
            } else {
                
                //Hide the beverag slot.
                document.getElementById("" + i).style.visibility = "hidden";
            }
            
            //Checks if the current index is out of stock or not and applies and grays out slots which are.
            updateOutOfStock(i);
        }
    
    //If there are no beverages stored in the machine, hide all beverage slots.
    } else {
        for (i = 0; i < 20; i++) {
            document.getElementById("" + i).style.visibility = "hidden";

        }
    }
}

//Is called when an image that doesn't exists is applied to an image element. Supplies a default placeholder picture instead.
function errorFunc() {
    this.src = "img/bevs/bottle.png";

}


//This function is apparently necessary when dealing with drag and drop
function allowDrop(ev) {
    ev.preventDefault();
}

//This function is called when an item is picked up for dragging
function drag(ev) {

    //The data set is the index of the beverage (0-19)
    ev.dataTransfer.setData("text", ev.target.id);
}

//This function is called when a dragged item is dropped.
function drop(ev) {

    //Prevents default drop behaviour to allow us to do things
    ev.preventDefault();

    //Gets the index of the beverage (0-19) from transfered data
    var bev_index = ev.dataTransfer.getData("text");

    //Call function to add beverage
    addBeverage(bev_index);
}

//This function handles everything regarding adding a beverage to the table in the cart
//Is called when dragging and dropping and when clicking a beverage
function addBeverage(bev_index) {

    var currentCount = +document.getElementById("" + bev_index).children[0].children[0].children[0].innerHTML;

    //If the beverage is not out of stock
    if (currentCount > 0) {
        
        //Subtract one from current count in the machine.
        currentCount -= 1;
        
        //Update HTML element to display current count
        document.getElementById("" + bev_index).children[0].children[0].children[0].innerHTML = currentCount;

        //Make the table visible and make info text invisible
        document.getElementById("table_ID").style.visibility = "visible";
        document.getElementById("tips_ID").style.visibility = "hidden";

        //Defines the table in JS, from ID in HTML
        var table = document.getElementById("tBody_ID");

        //If this beverage is the first of its kind
        if (bought_indexes[+bev_index][0] == 0) {

            //Add one to the array at index = bev_index
            bought_indexes[+bev_index][0] += 1;

            //Save which row in the table the beverage is in
            bought_indexes[+bev_index][1] = table.rows.length;

            //Make a new row and add it at the bottom of the table
            var row = table.insertRow(table.rows.length);

            //Add the three cells
            var cell_name = row.insertCell(0); //Beverage name
            var cell_price = row.insertCell(1); //Beverage price
            var cell_num = row.insertCell(2); //Number bought
            var cell_but = row.insertCell(3);

            cell_name.className = "dotText";

            //Update text in the new cells in the new row:
            cell_name.innerHTML = document.getElementById(bev_index).children[0].children[3].textContent;
            cell_price.innerHTML = document.getElementById(bev_index).children[0].children[4].textContent;
            cell_num.innerHTML = (bought_indexes[+bev_index][0] + " st");

            //Create a button
            var btn = document.createElement("BUTTON");
            btn.addEventListener("click", clickRemove);
            btn.innerHTML = "x";
            btn.id = "b" + bev_index;
            btn.className = "but3";
            
            //Append button to table
            cell_but.appendChild(btn);



        //If selected beverage is NOT the first beverage of its kind
        } else {
            //Add one to the array at index = bev_index
            bought_indexes[+bev_index][0] += 1;

            //Update number of beverages in the list
            table.rows[bought_indexes[+bev_index][1]].cells[2].innerHTML = (bought_indexes[+bev_index][0] + " st");

        }
        
        //If numbers of beverages availible for purchase now equals zero, ie no beverages left, change css-class to indicate out of stock.
        if (currentCount == 0) {
            document.getElementById("" + bev_index).className = "outOfStock";
            document.getElementById("" + bev_index).children[0].children[2].style.visibility = "visible";
        }
        
        
        //Save bought_indexes in localStorage.
        window.localStorage.setItem("localBoughtIndexes", JSON.stringify(bought_indexes));
       
        //Recalculates the total value of the purchase and updates table.
        calculateTotal(table);

    }
}


//Calculates the total ammout of all bought beverages and updates the footer in the table which displays the total ammount.
function calculateTotal(table) {
    /*  Initate variable sum, which is the total ammount, starting at 0 */
    var sum = 0;

    /*  For all rows in tabl, add together price columns to the variable sum */
    for (i = 0; i < table.rows.length; i++) {
        var item_price = +table.rows[i].cells[1].textContent;
        var item_num = +table.rows[i].cells[2].textContent.slice(0, -2);

        sum += (item_price * item_num);
        sum = +sum.toFixed(2);
    }

    /*  The slice-function will remove the last two characters from the string ("kr").
        The plus-sign converts from string to number. */

    /*  Update table footer with new total sum */
    var tableFoot = document.getElementById("tFoot_ID");
    tableFoot.rows[0].cells[1].innerHTML = (sum + " kr");
}

//Is called when the "X" to the right of a beverage in the cart is pressed and removes all of those beverages in the cart.
function clickRemove() {
    console.log(+this.id.substring(1)); // = bev_index
    
    //Gets the current number of the beverages currently in the machine.
    var currentCount = +document.getElementById("" + +this.id.substring(1)).children[0].children[0].children[0].innerHTML;
    
    //Adds together the amount in the cart of said beverare to the amount in the machine, for a new total.
    currentCount += bought_indexes[+this.id.substring(1)][0];
    
    
    //console.log(bought_indexes[+this.id.substring(1)][0]);
    //console.log(currentCount);
    
    //Updates the amount in the machine.
    document.getElementById("" + +this.id.substring(1)).children[0].children[0].children[0].innerHTML = currentCount;

    //Gets the table object in the cart.
    var table = document.getElementById("tBody_ID");
    
    //Deletes the selected row
    table.deleteRow([bought_indexes[+this.id.substring(1)][1]]);
    
    //Update names
    updateNames();
    
    //Calculate new total in the cart table.
    calculateTotal(table);
}

//Updates graphics with a gray out if an image is out ouf stock
function updateOutOfStock(bev_index) {
    var currentCount = +document.getElementById("" + bev_index).children[0].children[0].children[0].innerHTML;
    if (currentCount == 0) {
        document.getElementById("" + bev_index).className = "outOfStock";
        document.getElementById("" + bev_index).children[0].children[2].style.visibility = "visible";
    } else {
        document.getElementById("" + bev_index).className = "NOToutOfStock";
        document.getElementById("" + bev_index).children[0].children[2].style.visibility = "hidden";
    }

}

//************
// END of file index.js
//************

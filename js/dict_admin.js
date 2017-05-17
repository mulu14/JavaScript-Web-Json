
// File: dict_profile.js
//This file contains translation for the profile.html page
//Author: Lukas Enander, Moa Mattsson, Siri Persson and Mulugeta Forsido 
// Version 1.0 

// Dictionary variable with translations in swedish and english
var dict = {  
 
  'menu': {  
    'en': 'My profile',  
    'sv': 'Min profil'  
  },  
  'logout': {  
    'en': 'Logout',  
    'sv': 'Logga ut'  
  }, 

   'Namntabell': {  
    'en': 'Name',  
    'sv': 'Namn'  
  },

   'Pristabell': {  
    'en': 'Price',  
    'sv': 'Pris'  
  },

   'Antaltabell': {  
    'en': 'Quantity',  
    'sv': 'Antal'  
  },

   'Namntabell2': {  
    'en': 'Name',  
    'sv': 'Namn'  
  },

   'Pristabell2': {  
    'en': 'Price',  
    'sv': 'Pris'  
  },

   'Antaltabell2': {  
    'en': 'Quantity',  
    'sv': 'Antal'  
  },

    'Beverages': {  
    'en': 'Beverages',  
    'sv': 'Dryck'  
  },

    'Users': {  
    'en': 'Users',  
    'sv': 'Användare'  
  },
  'Stock': {  
    'en': 'Stock',  
    'sv': 'Lager'  
  },
    'Edit': {  
    'en': 'Edit',  
    'sv': 'Redigera'  
  },

    'Vmachine': {  
    'en': 'Vending machine',  
    'sv': 'Försäljningsautomat'  
  },
    'AllUsers': {  
    'en': 'All users',  
    'sv': 'Alla användare'  
  },

  'AddUser': {  
    'en': 'Add user',  
    'sv': 'Lägg till användare'  
  },
    'Username': {  
    'en': 'Username',  
    'sv': 'Användarnamn'  
  },
    'FirstName': {  
    'en': 'First name',  
    'sv': 'Förnamn'  
  },
    'LastName': {  
    'en': 'Last name',  
    'sv': 'Efternamn'  
  },
    'Balance': {  
    'en': 'Balance',  
    'sv': 'Balans'  
  },
    'status': {  
    'en': 'Signed in as: ',  
    'sv': 'Inloggad som: '  
  }, 

}  


// Function that translates into swedish when a users presses the swedish flag
function translateFunctionSwe (){ 

// The menu bar
var  changeLogout = dict.logout.sv; 
var swed = document.getElementById('logout'); 
var a =  swed.getElementsByTagName('a'); 
a[0].innerHTML= changeLogout; 

var changeMyprofile =dict.menu.sv;
var swed2= document.getElementById('menu'); 
var a1= swed2.getElementsByTagName('a');
a1[1].innerHTML = changeMyprofile;

var changeStatus =dict.status.sv;
var swe11= document.getElementById('status_loged_in'); 
swe11.innerHTML = changeStatus +getFullName(window.localStorage.getItem("loggedUser"));


// Only in admin page
var changeNamntabell =dict.Namntabell.sv;
var swed3= document.getElementById('namntabell'); 
swed3.innerHTML = changeNamntabell;

var changePristabell =dict.Pristabell.sv;
var swed4= document.getElementById('pristabell'); 
swed4.innerHTML = changePristabell;

var changeAntaltabell =dict.Antaltabell.sv;
var swed5= document.getElementById('antaltabell'); 
swed5.innerHTML = changeAntaltabell;

var changeNamntabell2 =dict.Namntabell.sv;
var swed6= document.getElementById('namntabell2');
swed6.innerHTML = changeNamntabell2;

var changePristabell2 =dict.Pristabell.sv;
var swed7= document.getElementById('pristabell2'); 
swed7.innerHTML = changePristabell2;

var changeAntaltabell2 =dict.Antaltabell.sv;
var swed8= document.getElementById('antaltabell2'); 
swed8.innerHTML = changeAntaltabell2;

var changeBeverage =dict.Beverages.sv;
var swed9= document.getElementById('bev_tab'); 
swed9.innerHTML = changeBeverage;

var changeUsers =dict.Users.sv;
var swed10= document.getElementById('user_tab'); 
swed10.innerHTML = changeUsers;

var changeStock =dict.Stock.sv;
var swed11= document.getElementById('stock_title'); 
swed11.innerHTML = changeStock;

var changeEdit =dict.Edit.sv;
var swed12= document.getElementById('edit_bev'); 
swed12.innerHTML = changeEdit;

var changeVmachine =dict.Vmachine.sv;
var swed13= document.getElementById('wrapper_right'); 
var a3= swed13.getElementsByTagName('h3');
a3[0].innerHTML = changeVmachine;

var changeAllUsers =dict.AllUsers.sv;
var swed14= document.getElementById('all_user_title'); 
swed14.innerHTML = changeAllUsers;

var changeAddUser =dict.AddUser.sv;
var swed15= document.getElementById('add_user'); 
swed15.innerHTML = changeAddUser;

var changeUsername =dict.Username.sv;
var swed16= document.getElementById('usern'); 
swed16.innerHTML = changeUsername;

var changeFirstname =dict.FirstName.sv;
var swed17= document.getElementById('fname'); 
swed17.innerHTML = changeFirstname;

var changeLastname =dict.LastName.sv;
var swed18= document.getElementById('lname'); 
swed18.innerHTML = changeLastname;

var changeBalance =dict.Balance.sv;
var swed19= document.getElementById('balance'); 
swed19.innerHTML = changeBalance;

}

// Function that translates into english when a users presses the english flag
function translateFunctionEn (){

// The menu bar
 var  changeLogout = dict.logout.en; 
var en = document.getElementById('logout'); 
var a =  en.getElementsByTagName('a'); 
a[0].innerHTML= changeLogout; 

var changeMyprofile =dict.menu.en;
var en2= document.getElementById('menu'); 
var a1= en2.getElementsByTagName('a');
a1[1].innerHTML = changeMyprofile;

var changeStatus =dict.status.en;
var en11= document.getElementById('status_loged_in'); 
en11.innerHTML = changeStatus+getFullName(window.localStorage.getItem("loggedUser"));

// Only in admin page
var changeNamntabell =dict.Namntabell.en;
var swed3= document.getElementById('namntabell'); 
swed3.innerHTML = changeNamntabell;

var changePristabell =dict.Pristabell.en;
var en4= document.getElementById('pristabell'); 
en4.innerHTML = changePristabell;

var changeAntaltabell =dict.Antaltabell.en;
var en5= document.getElementById('antaltabell'); 
en5.innerHTML = changeAntaltabell;

var changeNamntabell2 =dict.Namntabell.en;
var en6= document.getElementById('namntabell2'); 
en6.innerHTML = changeNamntabell2;

var changePristabell2 =dict.Pristabell.en;
var en7= document.getElementById('pristabell2'); 
en7.innerHTML = changePristabell2;

var changeAntaltabell2 =dict.Antaltabell.en;
var en8= document.getElementById('antaltabell2'); 
en8.innerHTML = changeAntaltabell2;

var changeBeverage =dict.Beverages.en;
var en9= document.getElementById('bev_tab'); 
en9.innerHTML = changeBeverage;

var changeUsers =dict.Users.en;
var en10= document.getElementById('user_tab'); 
en10.innerHTML = changeUsers;

var changeStock =dict.Stock.en;
var en11= document.getElementById('stock_title'); 
en11.innerHTML = changeStock;

var changeEdit =dict.Edit.en;
var en12= document.getElementById('edit_bev'); 
en12.innerHTML = changeEdit;

var changeVmachine =dict.Vmachine.en;
var en13= document.getElementById('wrapper_right'); 
var a3= en13.getElementsByTagName('h3');
a3[0].innerHTML = changeVmachine;

var changeAllUsers =dict.AllUsers.en;
var en14= document.getElementById('all_user_title'); 
en14.innerHTML = changeAllUsers;

var changeAddUser =dict.AddUser.en;
var en15= document.getElementById('add_user'); 
en15.innerHTML = changeAddUser;

var changeUsername =dict.Username.en;
var en16= document.getElementById('usern'); 
en16.innerHTML = changeUsername;

var changeFirstname =dict.FirstName.en;
var en17= document.getElementById('fname'); 
en17.innerHTML = changeFirstname;

var changeLastname =dict.LastName.en;
var en18= document.getElementById('lname'); 
en18.innerHTML = changeLastname;

var changeBalance =dict.Balance.en;
var en19= document.getElementById('balance'); 
en19.innerHTML = changeBalance;



}




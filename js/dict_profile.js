
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
'firstname': {  
    'en': 'First name:',  
    'sv': 'Förnamn:'  
  }, 

'lastname': {  
    'en': 'Last name:',  
    'sv': 'Efternamn:'  
  }, 
  'balance': {  
    'en': 'Balance:',  
    'sv': 'Saldo:'  
  }, 
   'history': {  
    'en': 'Purchase history',  
    'sv': 'Köphistorik'  
  }, 

    'date': {  
    'en': 'Date',  
    'sv': 'Datum'  
  }, 
    'beverage': {  
    'en': 'Beverage',  
    'sv': 'Dryck'  
  }, 
    'price': {  
    'en': 'Price',  
    'sv': 'Pris'  
  }, 
    'quantity': {  
    'en': 'Quantity',  
    'sv': 'Antal'  
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


// Only in profile.html
var  changeFirstName = dict.firstname.sv; 
var swed3 = document.getElementById('firstn'); 
swed3.innerHTML= changeFirstName; 

var  changeLastName = dict.lastname.sv; 
var swed4 = document.getElementById('lastn'); 
swed4.innerHTML= changeLastName; 

var  changeBalance = dict.balance.sv; 
var swed5 = document.getElementById('saldo'); 
swed5.innerHTML= changeBalance; 

var  changeHistory = dict.history.sv; 
var swed6 = document.getElementById('history'); 
swed6.innerHTML= changeHistory; 

var  changeDate = dict.date.sv; 
var swed7 = document.getElementById('date_hist'); 
swed7.innerHTML= changeDate; 

var  changeBev = dict.beverage.sv; 
var swed8 = document.getElementById('bev_hist'); 
swed8.innerHTML= changeBev; 

var  changePrice = dict.price.sv; 
var swed9 = document.getElementById('price_hist'); 
swed9.innerHTML= changePrice; 

var  changeQuantity = dict.quantity.sv; 
var swed10 = document.getElementById('quant'); 
swed10.innerHTML= changeQuantity; 


}

// Function that translates into english when a users presses the english flag
function translateFunctionEn (){

// In index.html
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


// Only in profile.html
var  changeFirstName = dict.firstname.en; 
var en3 = document.getElementById('firstn'); 
en3.innerHTML= changeFirstName; 

var  changeLastName = dict.lastname.en; 
var en4 = document.getElementById('lastn'); 
en4.innerHTML= changeLastName; 

var  changeBalance = dict.balance.en; 
var en5 = document.getElementById('saldo'); 
en5.innerHTML= changeBalance; 

var  changeHistory = dict.history.en; 
var en6 = document.getElementById('history'); 
en6.innerHTML= changeHistory; 

var  changeDate = dict.date.en; 
var en7 = document.getElementById('date_hist'); 
en7.innerHTML= changeDate; 

var  changeBev = dict.beverage.en; 
var en8 = document.getElementById('bev_hist'); 
en8.innerHTML= changeBev; 

var  changePrice = dict.price.en; 
var en9 = document.getElementById('price_hist'); 
en9.innerHTML= changePrice; 

var  changeQuantity = dict.quantity.en; 
var en10 = document.getElementById('quant'); 
en10.innerHTML= changeQuantity; 


}




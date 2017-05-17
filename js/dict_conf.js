
// File: dict_conf.js
//This file contains translation for the confirmation.html page
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
    'complete': {  
    'en': 'Purchase completed!',  
    'sv': 'Köpet slutfört!'  
  }, 
   'reciept': {  
    'en': 'Reciept',  
    'sv': 'Kvitto'  
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
  'total': {  
    'en': 'Total',  
    'sv': 'Totalt'  
  }, 
  'balance': {  
    'en': 'Your balance: ',  
    'sv': 'Saldo'  
  }, 
  'logout_text': {  
    'en': 'Don\'t forget to sign out in the upper right corner! ',  
    'sv': 'Glöm inte att logga ut det övre högra hörnet!'  
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

// Only in confirmation page
var changeComplete =dict.complete.sv;
var swed3= document.getElementById('conf_text'); 
swed3.innerHTML = changeComplete;

var changeReciept =dict.reciept.sv;
var swed4= document.getElementById('reciept_text'); 
swed4.innerHTML = changeReciept;

var changeBeverage =dict.beverage.sv;
var swed5= document.getElementById('bev_hist'); 
swed5.innerHTML = changeBeverage;

var changePrice =dict.price.sv;
var swed6= document.getElementById('price_hist'); 
swed6.innerHTML = changePrice;

var changeQuantity =dict.quantity.sv;
var swed7= document.getElementById('quant'); 
swed7.innerHTML = changeQuantity;

var changeTotal =dict.total.sv;
var swed8= document.getElementById('totalname'); 
swed8.innerHTML = changeTotal;

var changeBalance =dict.balance.sv;
var swed9= document.getElementById('balance_text'); 
swed9.innerHTML = changeBalance +getBalance();

var changeLogoutText =dict.logout_text.sv;
var swed10= document.getElementById('logout_text'); 
swed10.innerHTML = changeLogoutText;

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

// Only in confirmation page
var changeComplete =dict.complete.en;
var en3= document.getElementById('conf_text'); 
en3.innerHTML = changeComplete;

var changeReciept =dict.reciept.en;
var en4= document.getElementById('reciept_text'); 
en4.innerHTML = changeReciept;

var changeBeverage =dict.beverage.en;
var en5= document.getElementById('bev_hist'); 
en5.innerHTML = changeBeverage;

var changePrice =dict.price.en;
var en6= document.getElementById('price_hist'); 
en6.innerHTML = changePrice;

var changeQuantity =dict.quantity.en;
var en7= document.getElementById('quant'); 
en7.innerHTML = changeQuantity;

var changeTotal =dict.total.en;
var en8= document.getElementById('totalname'); 
en8.innerHTML = changeTotal;

var changeBalance =dict.balance.en;
var en9= document.getElementById('balance_text'); 
en9.innerHTML = changeBalance+getBalance();

var changeLogoutText =dict.logout_text.en;
var en10= document.getElementById('logout_text'); 
en10.innerHTML = changeLogoutText;



}






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
  'cart': {  
    'en': 'Cart',  
    'sv': 'Kundvagn'  
  }, 
  'infoText': {  
    'en': 'Drag and drop beverages here',  
    'sv': 'Drag och släpp din dryck här'  
  },  
  'infoText2': {  
    'en': 'Or...<br><br><br> Tap the beverage you want',  
    'sv': 'Eller...<br><br><br> Tryck på drycken du vill ha'  
  }, 
  'checkout': {  
    'en': 'Checkout',  
    'sv': 'Köp'  
  },
  'login': {  
    'en': 'Log in',  
    'sv': 'Logga in'  
  },
  'username': {  
    'en': 'Username',  
    'sv': 'Användarnamn'  
  },
  'password': {  
    'en': 'Password',  
    'sv': 'Lösenord'  
  },
  'submit': {  
    'en': 'Log in',  
    'sv': 'Logga in'  
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
  'Total': {  
    'en': 'Total',  
    'sv': 'Total'  
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

// Only in index.html
var  changeCheckout = dict.checkout.sv; 
var swed3 = document.getElementById('checkout'); 
swed3.innerHTML= changeCheckout; 

var  changeCart= dict.cart.sv; 
var swed4 = document.getElementById('cart'); 
var a4= swed4.getElementsByTagName('h3');
a4[0].innerHTML= changeCart; 

var  changeInfoText= dict.infoText.sv; 
var swed5 = document.getElementById('infoText'); 
swed5.innerHTML= changeInfoText; 

var  changeInfoText2= dict.infoText2.sv; 
var swed6 = document.getElementById('infoText2'); 
swed6.innerHTML= changeInfoText2; 

var  changeNamntabell= dict.Namntabell.sv; 
var swed7 = document.getElementById('tHead_ID'); 
var a5= swed7.getElementsByTagName('th');
a5[0].innerHTML= changeNamntabell; 

var  changePristabell= dict.Pristabell.sv; 
var swed8 = document.getElementById('tHead_ID'); 
var a6= swed8.getElementsByTagName('th');
a6[1].innerHTML= changePristabell; 

var  changeAntaltabell= dict.Antaltabell.sv; 
var swed9 = document.getElementById('tHead_ID'); 
var a7= swed9.getElementsByTagName('th');
a7[2].innerHTML= changeAntaltabell; 


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

// Only in index.html
var  changeCheckout = dict.checkout.en; 
var en3 = document.getElementById('checkout'); 
en3.innerHTML= changeCheckout; 

var  changeCart= dict.cart.en; 
var en4 = document.getElementById('cart'); 
var a4= en4.getElementsByTagName('h3');
a4[0].innerHTML= changeCart; 

var  changeInfoText= dict.infoText.en; 
var en5 = document.getElementById('infoText'); 
en5.innerHTML= changeInfoText; 

var  changeInfoText2= dict.infoText2.en; 
var en6 = document.getElementById('infoText2'); 
en6.innerHTML= changeInfoText2; 

var  changeNamntabell= dict.Namntabell.en; 
var en7 = document.getElementById('tHead_ID'); 
var a5= en7.getElementsByTagName('th');
a5[0].innerHTML= changeNamntabell; 

var  changePristabell= dict.Pristabell.en; 
var en8 = document.getElementById('tHead_ID'); 
var a6= en8.getElementsByTagName('th');
a6[1].innerHTML= changePristabell; 

var  changeAntaltabell= dict.Antaltabell.en; 
var en9 = document.getElementById('tHead_ID'); 
var a7= en9.getElementsByTagName('th');
a7[2].innerHTML= changeAntaltabell;


}




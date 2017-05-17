
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

// Only in login.html
var changeLoginText= dict.login.sv; 
var swed7 = document.getElementById('login'); 
var b =  swed7.getElementsByTagName('h3'); 
b[0].innerHTML= changeLoginText; 

var changeSubmit = dict.submit.sv; 
var swed8 = document.getElementById('submit'); 
swed8.innerHTML= changeSubmit; 

var changeUsername = dict.username.sv; 
var swed9 = document.getElementById('user2'); 
swed9.innerHTML= changeUsername; 

var changePassword = dict.password.sv; 
var swed10 = document.getElementById('password2'); 
swed10.innerHTML= changePassword;


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


// Only in login.html
var changeLoginText= dict.login.en; 
var en7 = document.getElementById('login'); 
var b =  en7.getElementsByTagName('h3'); 
b[0].innerHTML= changeLoginText; 

var changeSubmit = dict.submit.en; 
var en8 = document.getElementById('submit'); 
en8.innerHTML= changeSubmit; 

var changeUsername = dict.username.en; 
var en9 = document.getElementById('user2'); 
en9.innerHTML= changeUsername; 

var changePassword = dict.password.en; 
var en10 = document.getElementById('password2'); 
en10.innerHTML= changePassword;

}




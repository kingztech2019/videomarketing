// var deadline = new Date("July 15, 2020 15:37:25").getTime(); 
// var x = setInterval(function() { 
// var now = new Date().getTime(); 
// var t = deadline - now; 
// var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
// var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
// var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
// var seconds = Math.floor((t % (1000 * 60)) / 1000); 
// document.getElementById("demo").innerHTML = days + "d "  
// + hours + "h " + minutes + "m " + seconds + "s "; 
//     if (t < 0) { 
//         clearInterval(x); 
//         document.getElementById("demo").innerHTML = "EXPIRED"; 
//     } 
// }, 1000); 

var deadline = new Date("July 21, 2020 23:59:00").getTime(); 
  
var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML =days +" "+ "Days"; 
document.getElementById("hour").innerHTML =hours +" "+ "Hrs"; 
document.getElementById("minute").innerHTML = minutes +" "+ "Min";  
document.getElementById("second").innerHTML =seconds +" "+ "Sec";  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "PROMO EXPIRED"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 

let time = document.getElementById("currentTime");

setInterval(() =>{
let d = new Date();
time.innerHTML = d.toLocaleTimeString();
},1000)

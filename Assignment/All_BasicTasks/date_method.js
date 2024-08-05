let z = "Date Methods";
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("Heading3").innerHTML=z;
document.write("toString():"+ date.toString());
document.write("<br>toDateString():" +date.toDateString());
document.write("<br> toTimeString():" +date.toTimeString());
document.write("<br> toISOString():" +date.toISOString());
document.write("<br> toLocaleString():" +date.toLocaleString());
document.write("<br> getFullYear():" +date.getFullYear());
document.write("<br> getMonth():" +date.getMonth());
document.write("<br> getDate():" +date.getDate());
document.write("<br> getDay():" +date.getDay());
document.write("<br> getDay():" +days[date.getDay()]);
document.write("<br> getHours():" +date.getHours());
document.write("<br> getMinutes():" +date.getMinutes());
document.write("<br> getSeconds():" +date.getSeconds());
document.write("<br> getMilliseconds():" +date.getMilliseconds());
document.write("<br> getTime():" +date.getTime());



date.setFullYear(2025); 
date.setMonth(11); 
date.setDate(25); 
date.setHours(15); 
date.setMinutes(30); 
date.setSeconds(45); 

// Display updated date information
document.write("<br><br>Updated Date Methods:");
document.write("<br>Updated toString(): " + date.toString());
document.write("<br>Updated toDateString(): " + date.toDateString());
document.write("<br>Updated toTimeString(): " + date.toTimeString());
document.write("<br>Updated toISOString(): " + date.toISOString());
document.write("<br>Updated toLocaleString(): " + date.toLocaleString());
document.write("<br>Updated getFullYear(): " + date.getFullYear());
document.write("<br>Updated getMonth(): " + date.getMonth());
document.write("<br>Updated getDate(): " + date.getDate());
document.write("<br>Updated getDay(): " + date.getDay());
document.write("<br>Updated getDay(): " + days[date.getDay()]);
document.write("<br>Updated getHours(): " + date.getHours());
document.write("<br>Updated getMinutes(): " + date.getMinutes());
document.write("<br>Updated getSeconds(): " + date.getSeconds());
document.write("<br>Updated getMilliseconds(): " + date.getMilliseconds());
document.write("<br>Updated getTime(): " + date.getTime());



// Date toString() 
/*console.log("toString():", date.toString());

// Date toDateString()
console.log("toDateString():", date.toDateString());

// Date toTimeString()
console.log("toTimeString():", date.toTimeString());

// Date toISOString()
console.log("toISOString():", date.toISOString());

// Date toLocaleString()
console.log("toLocaleString():", date.toLocaleString());

// Date getFullYear()
console.log("getFullYear():", date.getFullYear());

// Date getMonth()
console.log("getMonth():", date.getMonth());

// Date getDate()
console.log("getDate():", date.getDate());

// Date getDay()
console.log("getDay():", date.getDay());

 // Date getDay()
 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 console.log("getDay():", days[date.getDay()]);

// Date getHours()
console.log("getHours():", date.getHours());

// Date getMinutes()
console.log("getMinutes():", date.getMinutes());

// Date getSeconds()
console.log("getSeconds():", date.getSeconds());

// Date getMilliseconds()
console.log("getMilliseconds():", date.getMilliseconds());

// Date getTime()
console.log("getTime():", date.getTime());*/

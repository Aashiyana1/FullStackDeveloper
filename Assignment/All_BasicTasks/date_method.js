console.log("***************Date Methods*******************");
const date = new Date();

// Date toString()
console.log("toString():", date.toString());

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
console.log("getTime():", date.getTime());

let X = "String and It's Methods!!"

let str = "Hello from the JavaScript world!";
let Firstname = "Aashiyana";
let Lastname = "Pathan";
let FullName = (Firstname+" "+Lastname);
let City = "Mumbai";

document.getElementById("Heading1").innerHTML=X;
document.getElementById("string1").innerHTML=str;
document.getElementById("City").innerHTML="the character at is:" + City.charAt(4);
document.getElementById("lastname1").innerHTML="the character code at is:" + Lastname.charCodeAt(3);
document.getElementById("fullname1").innerHTML="the concated string is:" + FullName;
document.getElementById("index1").innerHTML="the index of the letter y is:" + FullName.indexOf("y");
document.getElementById("lastIdx").innerHTML="the last index of letter n is:" + FullName.lastIndexOf("n");
document.getElementById("length").innerHTML="the length of the string fullname is:" + (FullName.length);
document.getElementById("upper").innerHTML="the UPPERCASE String of Fistname is:" + Firstname.toUpperCase();
document.getElementById("lower").innerHTML="the lowercase String of Lastname is:" + Lastname.toLowerCase();
document.getElementById("split").innerHTML= "the splitted string of Mumbai is:" + City.split("M");
document.getElementById("start").innerHTML= "the Firstname Starts with A :" + Firstname.startsWith("A");
document.getElementById("end").innerHTML="the Lastname ends with n:" +Lastname.endsWith("N");
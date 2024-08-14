//import {mul} from "aashiyana-math-package";

//console.log(mul(90,2));

import httpModule from "http";


var server = httpModule.createServer((req,res)=>{
    if(req.method === "GET" && req.url === "/customers"){
        res.write(JSON.stringify([{name: "John Doe"},{name: "Maria Doe"}]));
        res.end();
    }else if(req.method === "POST" && req.url === "/customers"){
        res.write(JSON.stringify({status: "Customer Created Successfully"}));
        res.end()
        } 
    else if(req.method === "DELETE" && req.url === "/customers"){
            res.write(JSON.stringify({status: "Customer Deleted Successfully"}));
            res.end()
    } 
    else if(req.method === "PATCH" && req.url === "/customers"){
                res.write(JSON.stringify({status: "Customer Updated Successfully"}));
                res.end()
    } 
    else if(req.method === "PUT" && req.url === "/customers"){
        res.write(JSON.stringify({status: "Customer Replaced Successfully"}));
        res.end()
    } 
        else{
        res.write("<h1>Default Else Block</h1>");
        res.end();
    }

});


server.listen(3100,()=>{
    console.log("Server is Running");
})
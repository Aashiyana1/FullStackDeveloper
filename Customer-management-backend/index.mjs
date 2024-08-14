import express from "express";

let app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello World From ExpressJs</h1>");
});

app.post("/customers", ()=>{

})

app.patch("/customers",()=>{

})

app.listen(3100,()=>{
    console.log("Expreess Server is Running");
})
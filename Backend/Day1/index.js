const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    // console.log("Slash route hit");
    fs.readFile("database.txt", "utf-8", (err, data)=> {
        console.log("Data --> ", data);
    })
    res.send("Healthy life");

});

app.post("/user", (req,res) => {
    console.log("Post request", req.body);
    fs.writeFile("shivam.txt", "My name is shivam, i'm developer", ()=> {
        console.log("File written");
    })
    res.send("Post request send successfully");
});

app.listen(8080, () => {
    console.log("Server Started");
});
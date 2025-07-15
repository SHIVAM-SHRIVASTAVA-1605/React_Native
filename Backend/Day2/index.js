const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.json());

app.get("/", (req,res) => {
    const STUDENT = [
        {
            name: "Shivam"
        },
        {
            name: "Shrivastava"
        },
        {
            name: "Hello"
        },
        {
            name: "Hyy"
        },
    ];
    res.render("index", {STUDENT});
});

app.get("/user", (req, res) => {
    // console.log("Slash route hit");
    fs.readFile("student.json", "utf-8", (err, data)=> {
        // data that read file read files is always in string format
        let parsedData = JSON.parse(data);
        console.log("data --> ", parsedData);
        res.json(parsedData);
    });
});

// app.get("user/:id", (req,res) => {
app.get("/userq", (req,res) => {
    // const {id} = req.params;
    const {id} = req.query;
    fs.readFile("student.json", "utf-8", (err, data) => {
        let parsedData = JSON.parse(data);
        const user = parsedData.STUDENTS.find((item) => item.id == id);
        if(user) {
            res.json(user);
        } else {
            res.json({message: "user not found"});
        }
    });
});

app.put("/updateuser/:id", (req,res) => {
    const { id } = req.params;
    const { name } = req.body;
    fs.readFile("student.json", "utf-8", (err, data) => {
        let parsedData = JSON.parse(data);
        const user = parsedData.STUDENTS.find((item) => item.id == id);
        const filterArray = parsedData.STUDENTS.filter ((item) => item.id != id);
        user.name = name;
        filterArray.push(user);
        let obj = {
            STUDENTS:filterArray,
        };
        fs.writeFile("student.json", JSON.stringify(obj), () => {
            console.log("Student updatd");
            res.json({
                message: "User updated",
            });
        });
    });
});

app.delete("/user/:id", (req,res) => {
    const { id } = req.params;
    fs.readFile("student.json", "utf-8", (err,data) => {
        let parsedData = JSON.parse(data);
        const filterArray = parsedData.STUDENTS.filter((item) => item.id != id);
        let obj = {
            STUDENTS: filterArray,
        };
        fs.writeFile("student.json",JSON.stringify(obj), () => {
            console.log("User Deleted");
            res.json({message: "User Deleted Success"});
        });
    });
});

app.post("/user", (req, res) => {
    console.log("Post request hit", req.body);
    fs.readFile("student.json", "utf-8", (err,data) => {
        let parsedData = JSON.parse(data);
        parsedData.STUDENTS.push(req.body);
        fs.writeFile("student.json", JSON.stringify(parsedData), () => {
            console.log("File Edited Success");
            res.json({ message: "User Addded"});
        });
    });
});

app.listen(8080, () => {
    console.log("Server Started");
});
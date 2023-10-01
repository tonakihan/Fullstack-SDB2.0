import express from "express";
import engine from "ejs-mate";
import path from "path";
import BinDB from "./bin.js"; //TODO: Встроить после завершения

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.engine("ejs", engine); //ejs-mate
app.set("views", __dirname + "/views"); //Папка для render
app.set("view engine", "ejs"); //use ejs

app.listen(PORT, () => {
    console.log(
        `Server starting on port ${PORT}\n` + 
        `  http://localhost:${PORT}`
    );
});

app.get("/(|home)", (req, res) => {
    res.render("page/index", {
        title: "home",
    });
});
app.get("/select", (req, res) => {
    res.render("page/select", {
        title: "select",
    });
});
app.get("/insert", (req, res) => {
    res.render("page/insert", {
        title: "insert",
    });
});
app.get("/about", (req, res) => {
    res.render("page/about", {
        title: "about",
    });
});

app.get("/api", (req, res) => {
    //Ща обратиться к sdb и вернуть данные
    console.log("GET: /api");

    let data = req.query;
    console.log(data);
});

app.post("/api", (req, res) => {
    console.log("POST: /api");

    res.json({ msg: "post" });
    console.log(req.body);
});

app.get("*", (req, res) => {
    //res.render("page/")
    res.send("error");
});

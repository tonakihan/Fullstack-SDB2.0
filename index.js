import express from "express";
import engine from "ejs-mate";
import path from "path";
import BinDB from "./bin.js";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const app = express();
const bin = new BinDB("./SDB/SDB2-cli.bin");

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
    console.log("GET: /api");

    let data = req.query;
    console.log(data);

    if (Object.keys(data).length === 0) {
        data.nothing = 1; //TODO: Нужно ли?
        res.status(400).json(data);
    } else {
        if (data.target === "Cтудент") {
            // Если английская С
            data.target = "Студент";
        }
        bin.get(data.target)
            .then(d => {
                data.data = d;
                res.json(data);
            })
            .catch(e => res.status(500).send(e));
    }
});

app.post("/api", (req, res) => {
    console.log("POST: /api");

    res.sendStatus(200); //TEST
    let data = req.body;
    console.log(data);

    let arrayData = [];
    for (let key in data) {
        if (data[key] === "Cтудент") {
            // Если английская С
            data[key] = "Студент";
        }
        arrayData.push(data[key]);
    }

    bin.put(...arrayData)
        .then(res.send("Ok"))
        .catch(e => res.status(500).send(e));
});

app.get("*", (req, res) => {
    //res.render("page/")
    res.send("error");
});

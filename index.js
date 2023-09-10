import express from "express";
import path from 'path';
import {spawn} from "node:child_process";

const PORT = process.env.PORT || 3000;
const app = express();
const __dirname = path.resolve();

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views')); //Папка для render
app.set('view engine', 'ejs'); //+.ejs для файлов (автоматика)


app.get("/api", (req, res) => {
    res.json({
        msg: 'FRFR'
    })
})

// app.get("/bin", (req, res) => {
// const sdb_cli = spawn("ls", ["--version"]);
// sdb_cli.stdout.on("data", (data) => {
// console.log(`stdout ${data}`); //TEST
// res.json({
// msg: `Data from stdout = ${data}`,
// });
// });

// sdb_cli.stderr.on("data", (data) => {
// console.log(`stderr ${data}`); //TEST
// res.json({
// msg: `Data from stdout = ${data}`,
// });
// });

// sdb_cli.on("close", (code) => {
// console.log(`Close, code = ${code}`);
// });
// });

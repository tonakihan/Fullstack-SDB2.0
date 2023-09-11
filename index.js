import express from 'express'
import engine from 'ejs-mate'
import path from 'path'
// import {spawn} from "node:child_process";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

const app = express();

app.use(express.static(__dirname + '/public'))
app.engine('ejs', engine) //ejs-mate
app.set('views', __dirname + '/views'); //Папка для render
app.set('view engine', 'ejs'); //use .ejs файлы


app.listen(PORT, () => {
    console.log(
        `Server starting on port ${PORT}\n` +
        `  http://localhost:${PORT}`
    );
});

app.get('/', (req, res) => {
  res.render('page/index', {"title": "homepage"})
})

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

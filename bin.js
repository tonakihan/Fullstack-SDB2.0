//TODO: Прокоментировать и дописать логику

import { spawn } from "node:child_process";

const cmd = "./SDB/SDB2-cli";

function bin(mode, target, value) {
    let args = ["--version"];
    const sdb_bin = spawn(cmd, args);

    sdb_bin.stdout.on("data", (data) => {
        //Норма
        console.log(`stdout ${data}`); //TEST
    });

    sdb_bin.stderr.on("data", (data) => {
        // При ошибке
        console.log(`stderr ${data}`); //TEST
    });

    sdb_bin.on("close", (code) => {
        //Это дает только код выхода
        console.log(`Close, code = ${code}`);
    });

    // if (mode == "GET") {
    // }
    // else if (mode == "PUT") {
    // }
    // console.log("error")
}

bin(); //TODO:TEST

export default bin;

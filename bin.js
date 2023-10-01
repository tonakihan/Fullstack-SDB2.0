/* 
 * Модуль предоставляет простой интерфейс к приложению 
 * SDB2-cli для встаки и получения данных 
 */
import { spawn } from "node:child_process";


class BinDB {
    constructor(path) {
        this.cmd = path;
    }

    get(target) {
    // Метод для получения данных из приложения
        const bin = spawn(this.cmd, ["-S", "-t", target]);
        this._logic(bin);
    }

    put(target, ...value) {
    // Метод для вставки данных в приложение
        const bin = spawn(this.cmd, ["-S", "-t", target, "-v", ...value]);
        this._logic(bin);
    }

    _logic(process) {
        process.stdout.on("data", (data) => {
            console.log(`SDB2-cli.bin out: \n${data}`); //TEST
        });
        process.stderr.on("data", (data) => {
            console.log(`Error\ndata: ${data}`); 
        });
        process.on("close", (code) => {
            console.log(`Close SDB2-cli.bin: Code ${code}`);
        });
    }
}

//TODO: TEST
let simpleObj = new BinDB("./SDB/SDB2-cli.bin");
simpleObj.get("Студент");
//simpleObj.put("Студент","")

export default BinDB;


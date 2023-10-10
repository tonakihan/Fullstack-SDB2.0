/*
 * ===========================================
 * Модуль предоставляет интерфейс к приложению
 * SDB2-cli для встаки и получения данных
 * ===========================================
 *
 * Example: 
 * let simpleObj = new BinDB("./SDB/SDB2-cli.bin");
 * simpleObj.get("Студент").then(()=> {
 * // Your code
 * });
 */
import { promisify } from "node:util";
import { execFile } from "node:child_process";

const execFilePromise = promisify(execFile);


class BinDB {
    constructor(path) {
        this.cmd = path;
    }

    async get(target) {
        // Метод для получения данных из приложения
        return await this._exec("-S", "-t", target);
    }

    async put(target, ...value) {
        //Метод для вставки данных в приложение
        this._exec("-I", "-t", target, "-v", ...value);
    }

    async _exec(...args) {
        const { stdout } = await execFilePromise(this.cmd, args);
        console.log("Info: SDB - output: \n" + stdout);
        return stdout;
    }
}


export default BinDB;


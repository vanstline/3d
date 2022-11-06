// let path = require('path');
// const minimist = require('minimist');
import path from "path";
import minimist from "minimist";

const evnOptions = {
    string: ["env", "report"],
    default: {
        host: process.env.NODE_ENV || "",
        env: process.env.NODE_ENV || "",
        environments: process.env.NODE_ENV || "",
    },
};

const configParam = minimist(process.argv.slice(2), evnOptions);

function getArgv() {
    return configParam;
}

/**
 * 获取路径名
 *
 * @param {*} dir 路径
 * @returns {String}
 */
function resolve(dir: string) {
    return path.join.apply(path, [__dirname, ".."].concat(dir));
}

/**
 * 获取环境名
 *
 * @returns {String}
 */
function getEvnFileName() {
    let res = "env";
    if (configParam && configParam.env && configParam.env !== "local" && configParam.env !== "development") {
        res = res + "." + configParam.env;
    } else {
        res = res + ".local";
    }

    return res;
}

/**
 * 获取环境变量文件路径
 *
 * @returns {string}
 */
function getEvnFilePath() {
    let res = getEvnFileName();
    console.log(res);
    return resolve("src/env/" + res);
}

export default { getEvnFileName, resolve, getArgv, getEvnFilePath };

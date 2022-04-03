"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomGenerator_1 = __importDefault(require("./randomGenerator"));
const rollLog = [];
let rollResults = randomGenerator_1.default.rollDice(10);
rollLog.push(rollResults);
console.log(rollLog);
const flipLog = [];
let flipResults = randomGenerator_1.default.flipCoin(50);
flipLog.push(flipResults);
console.log(flipLog);

import Randomness from "./randomGenerator";

const rollLog: number[] = [];
let rollResults: number = Randomness.rollDice(10);
rollLog.push(rollResults);

console.log(rollLog);


const flipLog: string[] = [];
let flipResults: string = Randomness.flipCoin(50);
flipLog.push(flipResults);

console.log(flipLog);
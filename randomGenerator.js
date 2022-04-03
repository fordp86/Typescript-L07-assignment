"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __importDefault(require("random"));
var Randomness;
(function (Randomness) {
    function rollDice(rolls) {
        let randomNum = 0;
        for (let i = 0; i < rolls; i++) {
            randomNum = random_1.default.int(1, 6);
            randomNum++;
        }
        return randomNum;
    }
    Randomness.rollDice = rollDice;
    function flipCoin(flips) {
        let flipping = " ";
        let randomFlip = random_1.default.int(0, 1);
        for (let i = 0; i < flips; i++) {
            if (randomFlip == 0) {
                return flipping = "heads";
            }
            else {
                return flipping = "tails";
            }
        }
        return flipping;
    }
    Randomness.flipCoin = flipCoin;
})(Randomness || (Randomness = {}));
exports.default = Randomness;

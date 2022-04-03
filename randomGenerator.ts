import random from 'random';

namespace Randomness{
    export function rollDice(rolls: number): number{
        let randomNum: number = 0;
    
        for (let i:number = 0; i < rolls; i++){
            randomNum = random.int(1, 6);
            randomNum++;
        }
        return randomNum;
    }
    
    export function flipCoin(flips: number): string{
        let flipping = " ";
        let randomFlip = random.int(0, 1);
    
        for (let i:number = 0; i < flips; i++){
            if(randomFlip == 0){
                return flipping = "heads";
            }else{
                return flipping = "tails";
            }
        }
        return flipping;
    }
}

export default Randomness;
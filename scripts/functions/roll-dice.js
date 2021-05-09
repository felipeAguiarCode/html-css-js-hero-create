export default function createRollDice(){
    
    const state = {
        dicesCount: 2
    }

    function roll(faces){
        return Math.floor(Math.random()*faces) + 1 
    }

    function d4(){
        return roll(4)
    }

    function d6(){ 
        return roll(6)
    }

    function d10(){
        return roll(10)
    }

    function d20(){ 
        return roll(20)
    }

    function d100(){
        return roll(100)
    }

    function oracle(){
        const diceValue = this.d6();
        return diceValue < 4 ? "no" : "yes"
    }

    return {
        state,
        d4,
        d6,
        d10,
        d20,
        d100,
        oracle
    }
}




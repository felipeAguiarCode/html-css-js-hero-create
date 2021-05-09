import createRollDice from "./functions/roll-dice.js";
import createCharM20 from "./functions/character.js";
import createButtonsListener from "./functions/buttons-listener.js";


const rollDice = createRollDice();
const char = createCharM20();
const buttonsListerner = createButtonsListener(document);

        

buttonsListerner.init();
char.createChar(char.races.DRAGONBORN,char.charClasses.WHITEMAGE);
console.log(char.toJSON());
console.log(char.attack(rollDice.d20(),'mind'));


//console.log(char.meleeAttack(rollDice.d20()));
//console.log(rollDice.d100())
//console.log(rollDice.state.dicesCount);
//console.log(rollDice.oracle());

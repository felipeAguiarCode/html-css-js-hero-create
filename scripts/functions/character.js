export default function createCaracterM20(){

    const state = {
        race:"",
        charClasse:"",
        level:0,
        hp:0,
        mp:0,
        stats:{
             strength:  {value:0,  bonus:0},
            dexterity:  {value:0,  bonus:0},
                 mind:  {value:0,  bonus:0},
        },
        ArmourClass: 10
    }

    const races = {
        HUMAN: "human",
        ELF:"elf",
        GNOME:"gnome",
        DWARF:"dwarf",
        HALFORC:"half-orc",
        DRAGONBORN:"dragonborn",
        HALFLING:"halflings"
    }

    const charClasses = {
        KNIGTH:"knight",
        BLACKMAGE:"black-mage",
        WHITEMAGE:"white-mage",
        THIEF:"thief"
    }

    function createChar(charRace, charClasse){
        setRace(charRace);
        setClass(charClasse)
    }

    function setRace(chooseRace){

        state.race = chooseRace;

         switch (chooseRace) {
             case races.HUMAN:
                 state.stats.strength.value += 1;
                 state.stats.dexterity.value += 1;
                 state.stats.mind.value += 1;
                 state.ArmourClass += 1;
                 break;
            
             case races.ELF:
             case races.GNOME:
                 state.stats.mind.value += 2;
                 break;
            
             case races.DWARF:
             case races.HALFORC:
             case races.DRAGONBORN:
                 state.stats.strength.value += 2;
                 state.ArmourClass += 2;
                 break;
            
             case races.HALFLING:
                 state.stats.dexterity.value += 2;
                 break;
             default:
                 state.stats.strength.value +=4;
                 break;
         }

    }

    function setClass(chooseClasse){
        state.charClasse = chooseClasse


        switch (chooseClasse) {
            case charClasses.KNIGTH:
                state.stats.strength.value += 1;
                state.hp += 8;
                state.mp += 4;
                state.ArmourClass += 2;
                break;

            case charClasses.BLACKMAGE:
            case charClasses.WHITEMAGE:
                state.stats.mind.value += 1;
                state.hp += 4;
                state.mp += 10;
                state.ArmourClass += 1;
                break;

            case charClasses.THIEF:
                state.stats.dexterity.value += 1;
                state.hp += 5;
                state.mp += 2;
                break;
            default:
                break;
        }
    }

    function attack(dice, charStat){
        return {
            attribute: {
                name: charStat,
                value: state.stats[charStat].value,
            },
            diceRoll: dice,
            level: state.level,
            total: state.stats[charStat].value
                   + dice 
                   + state.level 
                   + state.level
        }
    }

    function toJSON(){
        return state;
    }


    return {
        state,
        races,
        charClasses,
        createChar,
        attack,
        toJSON
    }
}
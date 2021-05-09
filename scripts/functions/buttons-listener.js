export default function createButtonsListener(document){
    let contador = 0;

    function init(){
        addPlusButton()
        addMinusButton()

        window.addEventListener("keypress", buttonListerner)
    }

    function changeMiniature(id){
        const gallery = [
            {
                id:0,
                nome: "knight"
            },
            {
                id:1,
                nome: "black-mage"
            },
            {
                id:2,
                nome: "ninja"
            },
            {
                id:3,
                nome: "red-mage"
            },
            {
                id:4,
                nome: "thief"
            },
            {
                id:5,
                nome: "white-mage"
            }
        ]

            document.getElementById("hero-miniature").src = `images/${gallery[id].nome}.png` 
    }

    function buttonListerner(event){
        
        if(event.code == "KeyL" ){
            changeValue(-1)
            changeMiniature(contador)
        } 
            
        if(event.code == "KeyR" ){
            changeValue(1)
            changeMiniature(contador)
        } 
    }

    function addPlusButton(){
        document.getElementById("box-hero-buttons-plus")
                .addEventListener("click",(e)=>{
                    changeValue(1)
                    changeMiniature(contador)
        })
    }

    function addMinusButton(){
        document.getElementById("box-hero-buttons-minus")
                .addEventListener("click",(e)=>{
                    changeValue(-1)
                    changeMiniature(contador)
                })
    }

    function changeValue(value){
        contador +=value
        
        if(contador > 5) contador = 0
        if(contador < 0) contador = 5

        console.log(contador)
    }

    return {
        init
    }

}
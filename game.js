let boxs = document.querySelectorAll(".box");
let resetbtn1 = document.querySelector(".resetbtn");
let newgamebtn1 = document.querySelector(".newgamebtn");
let msg = document.querySelector(".win");
let msgcont = document.querySelector(".msg-box");
let turnO = true;

let winningpatterns =
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];
    const showwinner = (winner) => {
        msg.innerText=`Congragulations winner is ${winner}`;
        msgcont.classList.remove("hide");
        disbalebox();
    }

const checkwinner = () =>
    {
        for(let pattern of winningpatterns)
            {
                let pos0 = boxs[pattern[0]].innerText;
                let pos1 = boxs[pattern[1]].innerText;
                let pos2 = boxs[pattern[2]].innerText;
                if(pos0!="" && pos1!="" && pos2!="")
                    {
                        if(pos0 === pos1 && pos1 === pos2)
                            {
                                console.log("Winner",pos0);
                                showwinner(pos0);
                            }
                    }

            }
    }
boxs.forEach((boxx) => {
    boxx.addEventListener("click",() =>{
        console.log("BOX CLICKED");
        if(turnO)
            {
                boxx.innerText="O";
                console.log("O printed");
                turnO=false;
            }
            else
            {
                boxx.innerText="X";
                console.log("X printed");
                turnO=true;
            }
            boxx.disabled = true;
            checkwinner();
    }    
    )
});

const disbalebox = () =>
    {
        for (boxx of boxs){
        boxx.disabled = true;}

    }
    const enablebox = () =>
        {
            for (boxx of boxs){
            boxx.disabled = false;
            boxx.innerText = "";
        }
    
        }
        const resetbutton = () =>

            {
                turnO = true;
                enablebox();
                msgcont.classList.add("hide");
            }

newgamebtn1.addEventListener("click",resetbutton);
resetbtn1.addEventListener("click",resetbutton);




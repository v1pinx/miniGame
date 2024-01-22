let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let countDB = 0;

//playerX, playerO
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        countDB = 0;
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    countDB = 0;
}

const showTie = () => {
    msg.innerText = 'Oops, Match is Tie.';
    msgContainer.classList.remove("hide");
}


const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos3Val === pos2Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box countwas clicked");
        countDB++;
        console.log("count",countDB);
        if(turnO){
            box.innerHTML = "O";
        }
        else{
            box.innerHTML = "X";
        }
        box.disabled = true;
        turnO = !turnO;
        checkWinner();
        if(countDB == 9){
            showTie();
        }
    });
});


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


/*
    implement the "Draw" Condition

*/
let container = document.getElementsByClassName('container')[0];
let xo = "O"
setGrid();

let boxes = document.getElementsByClassName('box');
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', startGame)
    
}








function checkLines() {
    if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != "") {
        winnerShow(boxes[0],boxes[1],boxes[2]);
    } else if (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != "") {
        winnerShow(boxes[3],boxes[4],boxes[5]);
    } else if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != "") {
        winnerShow(boxes[6],boxes[7],boxes[8]);
    } else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != "") {
        winnerShow(boxes[0],boxes[3],boxes[6]);
    } else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != "") {
        winnerShow(boxes[1],boxes[4],boxes[7]);
    } else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != "") {
        winnerShow(boxes[2],boxes[5],boxes[8]);
    } else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != "") {
        winnerShow(boxes[0],boxes[4],boxes[8]);
    } else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != "") {
        winnerShow(boxes[2],boxes[4],boxes[6]);
    }
  }
  



function setGrid() {
    let text = "";
    for (let i = 0; i < 9; i++) {
         text += "<div class='box'></div>"
        
    }
    container.innerHTML = text;
}


function startGame() {
    if(xo == "O"){
        xo = "X";
    }else {
        xo = "O"
    }
    this.innerHTML = xo;
    this.removeEventListener('click', startGame)
    checkLines()
}

function winnerShow() {
    endGame();
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].style.background = "orange"
        
    }
}

function endGame() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].removeEventListener('click', startGame)
    }
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelector(".refresh-btn").onclick = function (){
    var player1roll = randomIntFromInterval(1, 6);
    var player2roll = randomIntFromInterval(1, 6);
    switch (player1roll) {
        case 1:
            document.querySelector(".player1-dice-svg").src = "img/dice-one.svg";
            break;
        case 2:
            document.querySelector(".player1-dice-svg").src = "img/dice-two.svg";
            break;
        case 3:
            document.querySelector(".player1-dice-svg").src = "img/dice-three.svg";
            break;
        case 4:
            document.querySelector(".player1-dice-svg").src = "img/dice-four.svg";
            break;
        case 5:
            document.querySelector(".player1-dice-svg").src = "img/dice-five.svg";
            break;
        case 6:
            document.querySelector(".player1-dice-svg").src = "img/dice-six.svg";
            break;
    }
    switch (player2roll) {
        case 1:
            document.querySelector(".player2-dice-svg").src = "img/dice-one.svg";
            break;
        case 2:
            document.querySelector(".player2-dice-svg").src = "img/dice-two.svg";
            break;
        case 3:
            document.querySelector(".player2-dice-svg").src = "img/dice-three.svg";
            break;
        case 4:
            document.querySelector(".player2-dice-svg").src = "img/dice-four.svg";
            break;
        case 5:
            document.querySelector(".player2-dice-svg").src = "img/dice-five.svg";
            break;
        case 6:
            document.querySelector(".player2-dice-svg").src = "img/dice-six.svg";
            break;
    }
    
    if (player1roll > player2roll) {
        document.querySelector(".main-heading").innerHTML = "Player 1 Won!";
        document.querySelector("body").style.backgroundColor = "lightcoral";
        document.querySelector(".player1-heading").innerHTML = "Player 1 😀";
        document.querySelector(".player2-heading").innerHTML = "Player 2 😑";

    } else if (player1roll < player2roll) {
        document.querySelector(".main-heading").innerHTML = "Player 2 Won!";
        document.querySelector("body").style.backgroundColor = "lightblue";
        document.querySelector(".player1-heading").innerHTML = "Player 1 😑";
        document.querySelector(".player2-heading").innerHTML = "Player 2 😀";
    } else {
        document.querySelector(".main-heading").innerHTML = "It's a tie 😑";
        document.querySelector("body").style.backgroundColor = "grey";
        document.querySelector(".player1-heading").innerHTML = "🙄";
        document.querySelector(".player2-heading").innerHTML = "🙄";
    }
}




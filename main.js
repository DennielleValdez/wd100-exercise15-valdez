// TEST
let robotChoices = ['Rock' , 'Paper', 'Scissors'];

// Creating Random Numbers for Robot
    // let robot = Math.round(Math.random() * 2);

// Implementing a choice for the robot
    // let robot = robotChoices[Math.round(Math.random() * 2)];

// alert(robot);

// PUT INSIDE / COMBINED //

const playGame = (humanChoice) => {
    let human = humanChoice;

    // Creating Random Numbers for Robot
    // let robot = Math.round(Math.random() * 2);

    // Implementing a choice for the robot
    let robot = robotChoices[Math.round(Math.random() * 2)];

    // alert(`The choice of the robot is : ${robot}`);
    // alert(`The choice of the human is : ${human}`);

    if(human == "Rock"){
        if(robot == "Rock"){
            result = "IT'S A TIE!";
        }else if(robot == "Paper"){
            result = "ROBOT WINS!";
            scoringFunction("Robot");
        }else if(robot == "Scissors"){
            result = "HUMAN WINS!";
            scoringFunction("Human");
        }else{
            result = "Invalid choice for Robot";
        }
    }

    if(human == "Paper"){
        if(robot == "Paper"){
            result = "IT'S A TIE!";
        }else if(robot == "Scissors"){
            result = "ROBOT WINS!";
            scoringFunction("Robot");
        }else if(robot == "Rock"){
            result = "HUMAN WINS!";
            scoringFunction("Human");
        }else{
            result = "Invalid choice for Robot";
        }
    }

    if(human == "Scissors"){
        if(robot == "Scissors"){
            result = "IT'S A TIE!";
        }else if(robot == "Rock"){
            result = "ROBOT WINS!";
            scoringFunction("Robot");
        }else if(robot == "Paper"){
            result = "HUMAN WINS!";
            scoringFunction("Human");
        }else{
            result = "Invalid choice for Robot";
        }
    }
    document.querySelector("#result").innerHTML = result;
    document.querySelector("#randomResult").innerHTML = robot;
    document.querySelector("#humanResult").innerHTML = human;

}

// SCORING 

const scoringFunction = (winner) => {
    let robotScore = Number(document.querySelector("#robot-score").innerHTML);
    let humanScore = Number(document.querySelector("#human-score").innerHTML);
    // alert(`Human Score ${humanScore} and Robot Score ${robotScore}`);
    // alert(winner);
    if(winner == "Robot"){
        robotScore++;
        document.querySelector("#robot-score").innerHTML = robotScore;
    }else if(winner == "Human"){
        humanScore++;
        document.querySelector("#human-score").innerHTML = humanScore;
    }
};


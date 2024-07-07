//Global variables.
let pickedDifficulty = 11; //Initialize difficulty on easy by default.
let play;

//Function declaration.
let difficulty = () => {
    let promptedDifficulty = parseInt(prompt("Pick your poison, 1->Easy, 2->Hard, 3->Impossible."));
    if (promptedDifficulty === 1) {
        pickedDifficulty = 10; //Returns easy difficulty.
    } else if (promptedDifficulty === 2) {
        pickedDifficulty = 100; //Returns hard difficulty.
    } else if (promptedDifficulty === 3) {
        pickedDifficulty = 1000; //Returns impossible difficulty.
    } else {
        alert("Warning: The prompted difficulty must be 1, 2 or 3.");
    }
    menu(); //Returns to menu after setting difficulty.
};
let game = () => {
    play = "y"; //Initialize play to "Y" to start the game loop.
    while (play === "y") {
        let i = 0; // Defines the tries counter.
        let generatedNumber = Math.floor(Math.random() * pickedDifficulty) + 1; //Assigns a random possitive integer based on difficulty set.
        let guessedNumber;
        do {
            i++; //Increment the number of tries
            guessedNumber = parseInt(prompt("The random number has been generated, take a guess!"));
            if (guessedNumber !== generatedNumber) {
                console.log("Incorrect, try again!");
            }
        } while (guessedNumber !== generatedNumber);
        console.log(`Congrats! You've guessed the number in only ${i} tries!`);
        //Investigando
        play = prompt("Do you wish to keep playing Guess The Number? Enter Y/N to answer.").toLowerCase();
    }
    alert("Thanks for playing GuessTheNumber");
    if (play === "y") {
        menu(); //Return to menu after the game loop ends.
    }
};
let menu = () => {
    let choice = parseInt(prompt("Press '1' to play, press '2' to pick the difficulty."));
    switch (choice) {
        case 1:
            game();
            break;
        case 2:
            difficulty();
            break;
        default:
            console.log("Default");
            break;
    }
};

//Initial menu function call, 2s delay to load DOM first.
setTimeout(() => {menu();}, 2000);

    //console.log(button)
// let rockButton = document.querySelector('#rockButton')
// let paperButton = document.querySelector('#paperButton')
// let scissorsButton = document.querySelector('#scissorsButton')


// button[0].addEventListener('click',test)
// button[1].addEventListener('click',test)
// button[2].addEventListener('click',test)

    let button = document.querySelectorAll('button')
    let playerChoice = ""
    let computerChoice = ''
    let roundResult = ''
    let computerScore = 0
    let playerScore = 0
    let result = 'tie'
    let rounds = 0
    let j = true

    // let image = document.addEventListener('image')
    let scoreTextPlayer = document.querySelector('#scoreTextPlayer')
    let scoreTextComputer = document.querySelector('#scoreTextComputer')
    let scoreTextResult = document.querySelector('#scoreTextResult')
    let ComputerChoiceText = document.querySelector('#ComputerChoiceText')
    let scores = document.querySelector('#scores')

    let soundRock = document.querySelector('#audioRock')
    // let soundRock = new Audio('/sounds/soundRock.wav')
    let soundPaper = document.querySelector('#audioPaper')
    let soundScissors = document.querySelector('#audioScissors')
    let soundRoundLost = document.querySelector('#audioRoundLost')
    let soundGameLost = document.querySelector('#audioGameLost')
    let soundGameWon = document.querySelector('#audioGameWon')
    let soundRoundTie = document.querySelector('#audioRoundTie')

    // let user_agent = navigator.userAgent.toLowerCase();
    // let ios_devices = user_agent.match(/(iphone|ipod|ipad)/)  ? "touchstart" : "click";
    // image.bind(ios_devices , function() { // bind the ios devices
    //     console.log("IOS Devices Click Event Test ...");
    // });


    function getComputerChoice(){
        let possibleChoice = ["Rock", "Paper", "Scissors"]

        computerChoice = possibleChoice[Math.floor(Math.random()*possibleChoice.length)];
        return computerChoice;
    }


    for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', play)
        }





    function playRound(){

        if(result === 'end'){
            return;
            // return console.log('Game already ended bro...')
        }

        if(computerChoice === playerChoice){
            roundResult = "Tie round";
        }

        if(
            (computerChoice === "Rock" && playerChoice === "Scissors") ||
            (computerChoice === "Scissors" && playerChoice === "Paper") ||
            (computerChoice === "Paper" && playerChoice === "Rock")
        ){
            computerScore ++;
            roundResult = "Computer won round";
        }

        if(
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Scissors" && computerChoice === "Paper") ||
            (playerChoice === "Paper" && computerChoice === "Rock")
        ){
            playerScore ++;
            roundResult = "Player won round";
        }

        rounds++
        // console.log(roundResult);
        // console.log(playerScore);
        // console.log(computerScore);
        // console.log('----------------------------------------------------------------');


    }


    function play(e){
        if(result === 'end'){
            return;
        }
        //soundRock.play();
        // console.log(e)
        // console.log(e.path[0].id)
        playerChoice = e.path[0].id;
        //console.log(playerChoice)
        computerChoice = getComputerChoice()
        // console.log("Player choice = " + playerChoice)
        // console.log("Computer choice = " + computerChoice)

        ComputerChoiceText.textContent = "Computer chose: " + computerChoice
        playRound()
        scoreTextPlayer.textContent = 'Player Score: ' + playerScore + "⠀⠀";
        scoreTextComputer.textContent = 'Computer Score: ' + computerScore;
        scoreTextResult.textContent = roundResult
        console.log(roundResult)

        /*SOUNDS-------------------------------------------------------------*/
        if(roundResult === "Player won round"){
            if (playerChoice === 'Rock') {
                soundRock.play();
            }

            if (playerChoice === 'Paper') {
                soundPaper.play();
            }

            if (playerChoice === 'Scissors') {
                soundScissors.play();
            }

        }

        if(roundResult === "Computer won round"){
            soundRoundLost.play()
        }

        if (roundResult === "Tie round") {
            soundRoundTie.play();
        }
        /*SOUNDS-------------------------------------------------------------*/

        if (playerScore === 5){
            result = 'player'
            document.querySelector('html').style.backgroundColor = "rgb(204, 255, 204)"

            // SOUND
            setTimeout(function(){
                soundGameWon.play();
            }, 500)
            // SOUND

        }

        if (computerScore === 5){
            result = 'computer'
            document.querySelector('html').style.backgroundColor = "rgb(255, 102, 102)"

            // SOUND
            setTimeout(function(){
                soundGameLost.play();
            }, 500)
            // SOUND
        }

        // if (result === 'player' || result === 'computer'){
        //     scoreTextResult.textContent = result + ' won game!!'
        //     result = 'end'
        // }

        if (result === 'player'){
            scoreTextResult.textContent =  'Congratulations, you won the game :)'
            result = 'end'
        }

        if (result === 'computer'){
            scoreTextResult.textContent =  'You lost the game :('
            result = 'end'
        }
    }






    // Play five rounds o until 3 rounds won:

    // let computerScore = 0;
    // let playerScore = 0;
    // let roundResult ="";
    //
    //
    // for (let i = 0; i < 5; i++) {
    //     let computerChoice = getComputerChoice();
    //     alert(computerChoice);
    //
    //     let playerChoice = prompt("choose Rock, Paper or Scissors");
    //     playerChoice = capitalizeFirstLetter(playerChoice);
    //
    //     playRound(computerChoice, playerChoice);
    //
    //     console.log(roundResult);
    //     console.log(computerScore);
    //     console.log(playerScore);
    //
    //     if (playerScore === 3){
    //         i = 100;
    //         alert("player won");
    //
    //     }
    //
    //     if (computerScore === 3){
    //         i = 100;
    //         alert("Computer won");
    //     }
    //
    // }
    //
    // if (playerScore > computerScore){
    //     alert("player won");
    //
    // }
    //
    // if (computerScore > playerScore){
    //     alert("Computer won");
    // }




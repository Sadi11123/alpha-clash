// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');
// }
function handleKeyBoardPress(event){
   const playerPressed = event.key;

// //    Stop game if player press ESE------
    if(playerPressed === 'Escape'){
        gameOver();
    }




   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   const expectedKeyPressed = currentAlphabet.toLowerCase();

//    check
if(playerPressed === expectedKeyPressed){
    // Score update
    const currentScore = getTextValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementById('current-score', updatedScore);

    // Normal Process-------------------------------------------------------------
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;


    // Start a new round
    removeBackGroundById(expectedKeyPressed);
    continueGame();
}
else{
    const currentLife = getTextValueById('life-score');
    const updatedLife = currentLife - 1;
    setTextElementById('life-score', updatedLife);
    if(updatedLife === 0){
        gameOver()
    }

    
    
    // ---------------------------------------------------------------------------------
    // const currentLife = document.getElementById('life-score');
    // const currentLifeText = currentLife.innerText;
    // const life = parseInt(currentLifeText);
    // const newLife = life - 1;
    // currentLife.innerText = newLife;
}

}

// capture key board button press
document.addEventListener('keyup', handleKeyBoardPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log(alphabet)
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBackgroundById(alphabet);
}


// Same thing is done by function methods
function play(){
    hideSectionById('home');
    hideSectionById('final-score')
    showSectionById('play-ground');


    // Reset Score and Life-----------------
    setTextElementById('life-score', 5);
    setTextElementById('current-score', 0);


    continueGame();
}

function gameOver(){
    hideSectionById('play-ground');
    showSectionById('final-score');

    // update final score-----------
    const lastScore = getTextValueById('current-score');
    setTextElementById('last-score', lastScore);

    // Clear the last selected alphabet-----------
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackGroundById(currentAlphabet);

}

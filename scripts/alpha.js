
function handleKeyButtonPress(event){

    const playerpressed = event.key; 

    if(playerpressed==='Escaped'){
        gameOver();
        
    }

    const currentAlphabetElementNow = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElementNow.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerpressed === expectedAlphabet){


        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;

        setTextElementValueId('current-score',updatedScore);

        removeBackgroundColor(expectedAlphabet);
         continueGame(); 
    }
    else{

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;

        setTextElementValueId('current-life',updatedLife);
         if(updatedLife===0){
            gameOver();
    }

}
}

document.addEventListener('keyup',handleKeyButtonPress);

function continueGame(){

    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.  getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);


}


function play(){

   hideElementBYId('home-screen');
   showElementBYId('play-ground');
   hideElementBYId('final-score');

   setTextElementValueId('current-life',5);
   setTextElementValueId('current-score',0);

   continueGame();
}

function gameOver(){

    hideElementBYId('play-ground');
    showElementBYId('final-score');

    const lastscore = getTextElementValueById('current-score');
    setTextElementValueId('last-score',lastscore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet);

}
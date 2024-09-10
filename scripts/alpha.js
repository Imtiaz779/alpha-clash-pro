
function continueGame(){

    const alphabet = getRandomAlphabet();
    const currentAlphabetElement = document.
    
    getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);


}


function play(){

   hideElementBYId('home-screen');
   showElementBYId('play-ground');
   continueGame();
}
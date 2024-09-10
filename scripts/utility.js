function hideElementBYId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementBYId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getRandomAlphabet(){

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;

}
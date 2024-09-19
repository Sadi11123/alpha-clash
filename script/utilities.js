function hideSectionById(sectionId){
    const element = document.getElementById(sectionId);
    element.classList.add('hidden');
}

function showSectionById(sectionId){
    const element = document.getElementById(sectionId);
    element.classList.remove('hidden');
}

function setBackgroundById(sectionId){
    const element= document.getElementById(sectionId);
    element.classList.add('button-background');

}
function removeBackGroundById(sectionId){
    const element= document.getElementById(sectionId);
    element.classList.remove('button-background');
}

function getTextValueById(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    value = parseInt(elementTextValue);
    return value;
}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}



function getARandomAlphabet(){
    //step-1: get or create a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets)
    // step-2: get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(alphabet)
    return alphabet;

}
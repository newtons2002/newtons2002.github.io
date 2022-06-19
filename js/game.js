const maxNumInput = document.querySelector("#max_number input");
const guessForm = document.querySelector("#guess-form")
const guessFormInput = document.querySelector("#guess-form input");
const statusText = document.querySelector("#status");
const resultText = document.querySelector("#result");
console.log(guessFormInput);

function onGuessNumberSubmit(event){
    event.preventDefault();
    const maxNumber = maxNumInput.value;
    console.log(maxNumber);

    if (maxNumber == NaN || maxNumber <0){
        alert("Please input proper max number");
        return;
    }
    const guessNumber = guessFormInput.value;
    const randomNumber = Math.round(Math.random()*maxNumber);

    showStatus(guessNumber, randomNumber);
    showResult(guessNumber == randomNumber);
};
function showStatus(userGuess, comChosen){
    statusText.classList.remove("hidden");
    statusText.innerText = `You chose:${userGuess}, the machine chose:${comChosen}`;
};
function showResult(result){
    resultText.classList.remove("hidden");
    if(result){
        resultText.innerText = "You Won!";
    }else{
        resultText.innerText = "You Lost!";
    }
};

guessForm.addEventListener("submit", onGuessNumberSubmit);
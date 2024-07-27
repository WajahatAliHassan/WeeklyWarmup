let randomNo = Math.floor(Math.random() * 100) + 1;
let counter = 0;

function logic(event) {
    event.preventDefault();
    const enteredNo = parseInt(document.getElementById('num').value);
    const result = document.getElementById('result');
    const counterNo = document.getElementById('counter');

    if (enteredNo < 1 || enteredNo > 100 || isNaN(enteredNo)) {
        result.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    counter++;
    if (enteredNo === randomNo) {
        result.textContent = `You got the guess number: ${randomNo}`;
        counterNo.textContent = `Attempts: ${counter}`;
    } else if (enteredNo < randomNo) {
        result.textContent = "Too low! Try again.";
    } else {
        result.textContent = "Too high! Try again.";
    }
    counterNo.textContent = `Attempts: ${counter}`;
}

function replayGame() {
    randomNo = Math.floor(Math.random() * 100) + 1;
    counter = 0;
    document.getElementById('num').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('counter').textContent = '';
}

document.getElementById('guessForm').addEventListener('submit', logic);
document.getElementById('replayBtn').addEventListener('click', replayGame);

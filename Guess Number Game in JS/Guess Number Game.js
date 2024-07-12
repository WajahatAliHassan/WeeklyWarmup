let enteredNumber = prompt("Enter your Number: ");
function randomNumber(min , max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1)) + min;
}
let guessNumber = randomNumber(1, 100);
let guessCounter = 0;

while (!(enteredNumber == guessNumber)){
    if(enteredNumber > guessNumber){
        console.log("It is greater number than guessNumber");
    }
    else{
        console.log("It is smaller number than guessNumber");
    }
    guessCounter++;
    enteredNumber = prompt("Reenter your Number: ");

}
console.log("you reach the desired number after attempt: " + guessCounter);

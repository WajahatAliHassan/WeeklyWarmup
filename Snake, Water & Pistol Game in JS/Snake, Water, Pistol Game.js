const userOption = prompt("Enter number; 1=Snake; 2=water; 3=pistol: ")
const snake = 1;
const water = 2;
const pistol = 3;

function randomNumber(min, max){
    return Math.floor(Math.random(min, max) * (max - min +1)) + min;
}

const randomOption = randomNumber(1, 3);

if((randomOption == 1 && userOption==1) || (randomOption==2 && userOption==2) || (randomOption==3 && userOption==3)){
    console.log("Both are Same option...Renter the Number option");
}
else if((randomOption == 1 && userOption==2) ||(randomOption==1 && userOption==3) || (randomOption == 3 && userOption==2) ){
    console.log("You Won");
}

else if((randomOption == 2 && userOption==1) || (randomOption == 2 && userOption==3) || (randomOption==3 && userOption==1)){
    console.log("You Lose");
}
else{
    console.log("Invalid Option Number")
}
enteredNumber = prompt("Re Enter the Option Numbers");
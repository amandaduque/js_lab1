
let userPoints = 40;
let grantPoints = 10;
let playerWins = 0;
let playGame = prompt('Would you like to play with the Almighty Grant?');



function points(){
    return Math.floor((Math.random()*2)+1);
}

if (playGame === "yes"){
    let username = prompt('What is your name?');
    while (userPoints > 0 && playerWins < 3){
    userPoints -= points();
    grantPoints -= points();  
    console.log(`${username} has ${userPoints}`); 
    console.log(`Grant has ${grantPoints}`); 
    if (grantPoints <= 0){
        playerWins += 1;
        grantPoints = 10;
    }
    if (playerWins === 3) {
        console.log(`${username} won!`);
        break;
    } else if (userPoints <= 0){
        console.log(`${username} lost.`);
        break;
    }
    }

} else if (game === "no" || game !== ""){
    console.log ("Come back soon!");
}


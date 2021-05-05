// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// -------------FUNCTIONS------------
function numberRandom(min,max){
    return number = Math.floor(Math.random() * (max - min) + min);
}
function isInArray(element, array){
    for(var i=0; i< array.length;i++){
        if(element == array[i]){
            return true;
        }
    }
    return false;
}

//------------LIVELLO DIFFICOLTA----------
var minInterval = 1;
var maxInterval;
do{
var level = parseInt(prompt("Inserisci il livello difficoltà del gioco\n 0, 1 o 2"));
}while(isNaN(level) || level < 0 || level > 2);

switch (level){
    case 0:
        maxInterval=100;
        break;
    case 1:
        maxInterval=80;
        break;
    case 2: 
        maxInterval=50;
        break;
}
var bombs = [];
var attempts = [];
var maxAttempts = maxInterval - 16;
// console.log(minInterval);
// console.log(maxInterval);
// console.log(maxAttempts);

//---------GIOCO-----------
while( bombs.length < 16){
    var randomNumber = numberRandom(minInterval,maxInterval);
    if(!isInArray(randomNumber,bombs)){
        bombs.push(randomNumber);
    }
}
console.log("Bombe", bombs);

var gameOver = false;
while(attempts.length < maxAttempts && gameOver == false){
    var userNumber;
    do{
        userNumber = parseInt(prompt("Inserisci un numero compreso tra " + minInterval +" e "+ maxInterval));
    }while( isNaN(userNumber) || userNumber < minInterval || userNumber > maxInterval);

    if(isInArray(userNumber,bombs)){
        gameOver=true;
        alert("Game Over!\nScore: " + attempts.length);
    }else if(!isInArray(userNumber,attempts)){
        attempts.push(userNumber);
    }
    console.log(userNumber, attempts.length);
}
if(attempts.length == maxAttempts){
    alert("Complimenti!\nScore: " + attempts.length );
}
console.log(attempts);

console.log('JS OK!');

/*

Visualizzare in pagina 5 numeri casuali. (da 1 a 100 univoci)
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono
e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.(l'ordine non conta)

*/

// configurazione
// in production 30 secondi!
const TIMEOUT_SECONDS = 30;
const NUMBER_TO_GUESS = 5;


// Visualizzare in pagina 5 numeri casuali. (da 1 a 100 )

const numberContainer = document.getElementById('number-container');

const numbersToGuess = getUniqueRandomNumbers(NUMBER_TO_GUESS, 1, 100);

numberContainer.innerHTML = numbersToGuess.join(' - ');


// timer di 30 secondi
setTimeout(function () {
    console.log('timeout');
    // nascondo i numeri
    numberContainer.innerHTML = '';

    setTimeout(askAndCheckUserNumbers, 100);


}, TIMEOUT_SECONDS * 1000);


function askAndCheckUserNumbers() {
    // utente inserisce via prompt i 5 numeri
    const guessedNumbersByUser = getGuessedNumbersByUser();
    console.log(guessedNumbersByUser);
    let guessedNumbers = 0;
    // check sui numeri inseriti
    for (let i = 0; i < guessedNumbersByUser.length; i++) {
        const userNumber = guessedNumbersByUser[i];
        if (numbersToGuess.includes(userNumber)) {
            // display quali numeri sono stati individuati
            console.log('Hai indovinato il numero', userNumber);
            guessedNumbers++;
        }

    }

    // display quanti numeri sono stati individuti
    console.log('Hai indovinato', guessedNumbers, 'numeri');

}


function getGuessedNumbersByUser() {
    const guessedNumbers = [];

    while (guessedNumbers.length < NUMBER_TO_GUESS) {
        const number = parseInt(prompt('Numero?'));
        if (!isNaN(number) && !guessedNumbers.includes(number)) {
            guessedNumbers.push(number);
        }
    }

    return guessedNumbers
}







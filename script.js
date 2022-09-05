console.log('JS OK')

//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Visualizzare 5 numeri random
let numbers = document.querySelector('randNumber');

numbers = [];

for (i = 1; i < 5; i++) {
    numbers = Math.floor(Math.random() * 5) + 1;
    console.log(numbers)
}
document.getElementById('randNumber').innerHTML = numbers

//countdown di 30s con successiva richiesta
let countdown = 30;

const intervalId = setInterval(function () {
    if (countdown > 0) {

    } else {
        countdown = parseInt(prompt('Inserisci i numeri precedentemente esposti'))
        console.log(countdown);
    }
    countdown--;

}, 1000)

setTimeout(function () {
    clearInterval(intervalId);
}, (countdown * 1000) + 1200)

//individuare numeri esatti

if (numbers === countdown) {
    console.log(countdown)
} else {
    console.log('numeri errati')
}

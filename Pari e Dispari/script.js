function numeroCasuale() {
    let numero = Math.floor(Math.random() *4);
    return numero;
}

function pariDispari(num) {
    if (num % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

let numeroUtente = prompt('Inserisci un numero compreso tra 1 e 5');
let scelta = prompt('Scegli pari o dispari');
let numeroPC = numeroCasuale();
console.log(numeroPC);
let somma = numeroUtente + numeroPC;
let target = document.getElementById('target');

if (numeroUtente >= 1 && numeroUtente <= 5 && !isNaN(numeroUtente)) {
    if (scelta == 'pari' || scelta == 'dispari') {
        let verifica = pariDispari(somma)
        if (verifica == scelta) {
            target.innerHTML = 'HAI VINTO!'
        } else {
            target.innerHTML = 'HAI PERSO!'
        }
    } else {
        alert('Scegli pari o dispari')
    }
} else {
    alert('Il numero inserito non è valido')
}

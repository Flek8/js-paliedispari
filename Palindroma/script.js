let parolaScelta = prompt('Inserisci una parola o una frase').toLowerCase;
let verifica = palindroma(parolaScelta);

function palindroma(parola) {

    let parolaInversa = '';

    for (let i = parolaScelta.length -1; i > 0; i--) {
        parolaInversa += parolaScelta[i];
        
        
    }

    parolaInversa = parolaInversa.toLowerCase;

    if (parolaScelta == parolaInversa) {
       return alert('La parola/frase inserita è palindroma')
    } else {
       return alert('La parola/frase inserita non è palindroma')
    }
}


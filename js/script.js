

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

function campoMinato() {
  var listaNum = [];
  var listaUtente = [];
  var size = 16;
  var numMin = 1;
  var numMax = 100;

  while (listaNum.length < size) {
    var number = getRandomNumber(1, 100);

    if (! listaNum.includes(number)) {
        listaNum.push(number);
    }
  }

  console.log(listaNum);

  // In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
  // L'utente non può inserire più volte lo stesso numero.
  for (var i = 0; listaUtente.length < 84; i++) {
    var numUtente = parseInt (prompt("Inserisci un numero da 1 a 100"));
    while (listaUtente.includes(numUtente) || ( numUtente < numMin) || (numUtente > numMax)) {
      alert("Attenzione! Numero errato, scrivi un nuovo numero da 1 a 100");
      break;
    }

    listaUtente.push(numUtente);
    if (listaNum.includes(numUtente)) {
      alert("Hai preso una mina, hai perso!");
      break;
    } else if (! listaNum.includes(number)) {
      numUtente = parseInt (prompt("Inserisci un numero da 1 a 100"));
    }
  }

}
// Funzione per generare un numero random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Click associato al tasto "Gioca"
document.getElementById('giocaBtn').addEventListener('click', campoMinato)

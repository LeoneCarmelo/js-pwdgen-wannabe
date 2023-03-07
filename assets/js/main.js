
// Chiedi all'utente il suo nome,
const name = prompt('Ciao, per generare la tua password inserisci il tuo nome')
// poi chiedi il suo cognome,
const surname = prompt('Adesso inserisci il tuo cognome')
// poi chiedi il suo colore preferito
const color = prompt('Infine inserisci il tuo colore preferito')
// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
const resultEl = document.getElementById('result')

resultEl.innerHTML = `La tua nuova password è: ${name}${surname}${color}23`
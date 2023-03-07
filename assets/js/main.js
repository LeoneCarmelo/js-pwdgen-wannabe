
// Chiedi all'utente il suo nome,
let name = prompt('Ciao, per generare la tua password inserisci il tuo nome')
// poi chiedi il suo cognome,
let surname = prompt('Adesso inserisci il tuo cognome')
// poi chiedi il suo colore preferito
let color = prompt('Infine inserisci il tuo colore preferito')
// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
let resultEl = document.getElementById('result')

resultEl.innerHTML = `La tua nuova password è: ${name}${surname}${color}23`
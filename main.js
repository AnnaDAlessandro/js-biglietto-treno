const costoKilometri= 0.21;

let numeroKilometri = prompt("Quanti kilometri devi fare?")
let etaPasseggero = prompt ("Quanti anni ha il passeggero?")
const risultatoHtml= document.getElementById(`risultato`)

console.log(risultatoHtml)

let prezzoBiglietto= costoKilometri*numeroKilometri

console.log(numeroKilometri, prezzoBiglietto)

if (etaPasseggero < 18) {
    prezzoBiglietto= prezzoBiglietto -(prezzoBiglietto*0.2)
    risultatoHtml.innerHTML=`il prezzo del biglietto è : ${prezzoBiglietto.toFixed(2)} euro con uno sconto del 20% perchè minorenne`
}else if(etaPasseggero > 65) {
    prezzoBiglietto= prezzoBiglietto -(prezzoBiglietto*0.4)
    risultatoHtml.innerHTML=`il prezzo del biglietto è : ${prezzoBiglietto.toFixed(2)} euro con uno sconto del 40% perchè over 65`
}else {
    risultatoHtml.innerHTML=`il prezzo del biglietto è : ${prezzoBiglietto.toFixed(2)} euro`
}

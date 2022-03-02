let getal1 = parseFloat(prompt("Geef een eerste random getal in"));
let getal2 = parseFloat(prompt("Geef een tweede random getal in"));
console.log(getal1)
console.log(getal2)
document.getElementById('ver').innerHTML = 'De uitkomst van de vermenigvuldiging is: ' + (getal1 * getal2)
document.getElementById('opt').innerHTML = 'De uitkomst van de optelling is: ' + (getal1 + getal2)
document.getElementById('aft').innerHTML = 'De uitkomst van de aftrekking is: ' + (getal1 - getal2)
document.getElementById('del').innerHTML = 'De uitkomst van de deling is: ' + (getal1 / getal2)
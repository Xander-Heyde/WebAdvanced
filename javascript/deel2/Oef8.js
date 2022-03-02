let getal1 = prompt("Geef een eerste random getal in")
let getal2 = prompt("Geef een tweede random getal in")

document.getElementById('ver').innerText = 'De uitkomst van de vermenigvuldiging is: ' + (getal1 * getal2)
document.getElementById('opt').innerText = 'De uitkomst van de optelling is: ' + (parseInt(getal1) + parseInt(getal2))
document.getElementById('aft').innerText = 'De uitkomst van de aftrekking is: ' + (getal1 - getal2)
document.getElementById('del').innerText = 'De uitkomst van de deling is: ' + (getal1 / getal2)
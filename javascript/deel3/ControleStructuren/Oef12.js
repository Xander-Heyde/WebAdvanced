let AantalLijnen = parseInt(prompt("Geef het aantal lijnen voor de driehoek"));
let stringhastag = "";
let string;
for (let i = 1; i <= AantalLijnen; i++) {
    string="";
    for (let j = 0; j < AantalLijnen - i; j++) {
        string += " "
    }
    stringhastag += "#"
    console.log(string + stringhastag)
}
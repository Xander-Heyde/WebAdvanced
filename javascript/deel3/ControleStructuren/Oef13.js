let AantalLijnen = parseInt(prompt("Geef het aantal lijnen voor de driehoek"));
let stringspatie = "";
let string2="";
let string;
for (let i = 1; i <= AantalLijnen; i++) {
    string="";
    for (let j = 0; j < AantalLijnen - i; j++) {
        string += " "
    }
    for (let j = 1; j < i; j++) {
        string += "#"
    }
    stringspatie += "#"
    console.log(string + stringspatie+string2)
}
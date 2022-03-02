let gbDatum = prompt("Geef u geboortedatum in");
gbDatum = Number(gbDatum.substring(6,11));
const Datum = new Date();
Datum.getFullYear();
console.log(gbDatum)
console.log(Datum)
if (Datum - gbDatum > 20) {
    alert("u bent oud genoeg")
}
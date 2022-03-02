let Datum = new Date();
let hour = Datum.getHours();
let min = Datum.getMinutes();
if (Datum>12){
    alert(`${hour}:${min} in de namiddag`)
}
else {
    alert(`${hour}:${min} in de voormiddag`)
}
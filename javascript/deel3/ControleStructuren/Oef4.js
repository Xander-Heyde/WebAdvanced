let Datum = new Date();
let hour = Datum.getHours();
console.log(hour)
if (7<=hour && hour<12){
    alert('Goedemorgen')
}
if (12<=hour && hour<18){
    alert('Goede dag')
}
if (18<=hour || hour<7){
    alert('Goede avond')
}
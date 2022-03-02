let Datum = new Date();
let hour = Datum.getHours();
let Dag = Datum.getDay();
let DagNaam;
switch (Dag){
    case 0:DagNaam = "Zondag";break;
    case 1:DagNaam = "Maandag";break;
    case 2:DagNaam = "Dinsdag";break;
    case 3:DagNaam = "Woensdag";break;
    case 4:DagNaam = "Donderdag";break;
    case 5:DagNaam = "Vrijdag";break;
    case 6:DagNaam = "Zaterdag";break;
}

if (7<=hour && hour<12){
    alert('Goedemorgen het is '+DagNaam)
}
if (12<=hour && hour<18){
    alert('Goede dag het is '+DagNaam)
}
if (18<=hour || hour<7){
    alert('Goede avond het is '+DagNaam)
}
let getal;
do {
    getal = parseInt(prompt("Geef een getal tussen 1 en 10"));
    if (getal > 10 || getal < 1){
        console.log('Niet mogelijk');
        alert("Het getal is niet tussen 1 en 10");
    }
}while (getal > 10 || getal < 1)
if (getal<=10 && getal>=1){
    for (let i = 1; i < 11; i++) {
        console.log(`${i} * ${getal} = ${i*getal}`)
    }
}

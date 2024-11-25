
//Prendiamo l'elemento in base ID e associamo un eventListener che al click invoca la funzione associata
document.getElementById("genera").addEventListener("click", function () {
    // Leggere i valori dagli input
    const nome = document.getElementById("nome").value.trim();
    const km = parseFloat(document.getElementById("km").value);
    const eta = document.getElementById("eta").value;

    // Controllo validità dei datio
    if (!nome || isNaN(km) || km <= 0) {
        alert("Inserisci dati validi !");
        return;
    }

    // Calcolo sconto e prezzo totale
    const prezzoTotale = km * 0.21;
    let sconto = 0;
    let offerta = "Standard";

    if (eta === "minorenne") {
        sconto = 0.2;
        offerta = "Sconto Minorenne";
    } else if (eta === "over65") {
        sconto = 0.4;
        offerta = "Sconto Anziani";
    }

    const prezzoFinale = (prezzoTotale * (1 - sconto)).toFixed(2);

    // Generazione random di carrozza, codiceCP e sciopero
    const carrozza = Math.floor(Math.random() * 10) + 1;
    const codiceCP = Math.floor(10000 + Math.random() * 90000);
    const sciopero = Math.floor(Math.random() * 10) + 1;
    alert (sciopero)

    if (sciopero >= 8){
        document.getElementById("sciopero").innerHTML = "Attenzione ! <br> Sciopero in corso. Gli orari potrebbero variare"
    } else {
        document.getElementById("sciopero").innerHTML = ""

    }

    // Creiamo la tabella che verrà successivamente inserità nell'html
    const biglietto = `
        <tr>
            <td> ${nome}</td>
            <td>${offerta}</td>
            <td>${carrozza}</td>
            <td>${codiceCP}</td>
            <td>€ ${prezzoFinale}</td>
        </tr>
    `;

    // Inserimento nel DOM
    document.getElementById("dettagli-biglietto").innerHTML = biglietto;

});

// Reset dei campi nel caso del click di annulla
document.getElementById("annulla").addEventListener("click", function () {
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "adulto";

    // Cancellare i dettagli del biglietto
    document.getElementById("dettagli-biglietto").innerHTML = "";
});



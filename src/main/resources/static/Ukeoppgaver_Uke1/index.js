/*Oppgave 1
Lag en HTML-knapp som kaller en JavaScript-funksjon som viser "Hei verden" på en blank side via "document.write". Bruk hendelsen "onClick" på knappen.*/

function innKlikk() {
    document.write("Hei verden!");
}
/*    Oppgave 2
Gjør om oppgave 1 til å vise en "alert"-boks når knappen trykkes. */

function heiAlert() {
    alert("Hallo verden!");
}

/*    Oppgave 3
Lag et input-felt i en HTML-side. Lag et JavaScript som leser dataene fra input-feltet når det er endringer i feltet (hendelsen "onChange") og som skriver disse dataene ut på en blank side med "document.write". Funksjonen som kalles ved "onChange" skal ta en inn-parameter, som er verdien av input-feltet. */

function innTekst3(innData) {
    document.write(innData);
}

/*    Oppgave 4
Endre oppgave 3 ved å legge ut en "pop-up/alert"-boks som skal inneholde teksten fra input-feltet.*/

function innTekst4(innData) {
    alert(innData);
}

/*    Oppgave 5
Utvid oppgave 4 med å skrive informasjonen fra input-feltet til "console.log". Sjekk at dataene blir skrevet til loggen.*/

function innTekst5(innData) {
    console.log(innData);
}

//    Ekstraoppgaver

/*Oppgave 6
Utvid oppgave 3 ved å gi et farge til teksten som vises på blank side.*/

function innTekst6(innData) {
    document.write(innData);
    document.body.style.color = "red";
}

/*    Oppgave 7
Utvid oppgave 4 ved å vise input i alert boks i store bokstaver. */

function innTekst7(innData) {
    alert(innData.toUpperCase());
}

/*    Oppgave 8
Lag et knapp som skriver tall “1” til console (bruk console.log) hver gang den trykkes. */

function visTall() {
        console.log(1);
    }

/*    Oppgave 9
Utvid oppgave 8 slik at den skriver til console antall ganger knapp ble trykket. (Tell opp fra 1) */

let clicks = 0;

function visTelleTall() {
    clicks++;
    console.log(clicks);
}

/* Oppgave 10
Endre oppgave 9 ved å legge til en melding til console slik at den viser "Du har trykket på knappen X ganger" (hvor X er antall ganger knappen ble trykket på). */

let clicksWithStrings
function visTelleTallMedTekst() {
    clicksWithStrings++;
    console.log("Du har trykket på knappen "+clicks+" ganger.");
}
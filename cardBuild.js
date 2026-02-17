const anzahlGruppen = 3;
const buttonsProGruppe = 4;
const buttonMatrix = [];

for (let i=0; i < anzahlGruppen; i++){
    const gruppe = [];

    for (let j = 0; j < buttonsProGruppe; j++){
        const btn = document.createElement("button");
        btn.innerText = `Gruppe ${i + 1} - Btn ${j + 1}`;

        // Beispiel: Klick-Event für jeden Button
        btn.addEventListener("click", function(){
            this.style.backgroundColor = "green";
            console.log(`Geklickt: Gruppe ${i}, Button ${j}`);
        });

        gruppe.push(btn); // Button in die aktuelle Gruppe legen
        document.body.appendChild(btn); // Button auf der Seite anzeigen
    };

    buttonMatrix.push(gruppe); // die Fertige Gruppe ins Hauptarray schieben
}

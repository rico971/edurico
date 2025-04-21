const calendrier = document.getElementById("calendrier");
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const emploiDuTemps = document.getElementById("emploi-du-temps");
const heures = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const documentsList = document.getElementById("documents");
const nouveauDocumentInput = document.getElementById("nouveau-document");
const ajouterDocumentButton = document.getElementById("ajouter-document");

function remplirCalendrier() {
    const aujourdhui = new Date();
    let jour = aujourdhui.getDate();
    let mois = aujourdhui.getMonth();
    const annee = aujourdhui.getFullYear();
    const premierJourDuMois = new Date(annee, mois, 1).getDay();
    const nombreDeJoursDansLeMois = new Date(annee, mois + 1, 0).getDate();
    let caseCourante = 0;

    for (let i = 0; i < 6; i++) {
        const row = calendrier.insertRow();
        for (let j = 0; j < 7; j++) {
            const cell = row.insertCell();
            if (i === 0 && j < premierJourDuMois) {
                // Cases vides avant le premier jour du mois
            } else if (caseCourante < nombreDeJoursDansLeMois) {
                cell.textContent = jour;
                jour++;
                caseCourante++;
                 if (jour === aujourdhui.getDate() && mois === aujourdhui.getMonth() && annee === aujourdhui.getFullYear()){
                    cell.style.backgroundColor = "#FFFFE0";
                }
            }
        }
    }
}

function remplirEmploiDuTemps() {
    for (let i = 0; i < heures.length; i++) {
        const row = emploiDuTemps.insertRow();
        const cellHeure = row.insertCell();
        cellHeure.textContent = heures[i];
        for (let j = 0; j < 5; j++) {
            const cellActivite = row.insertCell();
            cellActivite.textContent = ""; // Vous pouvez ajouter des activités ici
        }
    }
}

function ajouterDocument() {
    const nomDocument = nouveauDocumentInput.value.trim();
    if (nomDocument !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = nomDocument;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = function() {
            listItem.remove();
        };
        listItem.appendChild(deleteButton);
        documentsList.appendChild(listItem);
        nouveauDocumentInput.value = ""; // Réinitialise le champ de saisie
    }
}

ajouterDocumentButton.addEventListener("click", ajouterDocument);

remplirCalendrier();
remplirEmploiDuTemps();

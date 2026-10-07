/*
    Nom : Monney
    Prénom : Michael
    Classe : I.DA-P2A
    Titre de l'exercice : Exercice 2 devinettes
    Objectif du fichier : Faire deviner un nombre
*/

"use strict"

console.warn("Exercice 2");

function genererNombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let recommencer = true;

while (recommencer) {

    const nombre = genererNombreAleatoire(1, 100);
    let trouve = false;

    for (let essest = 1; essest <= 10; essest++) {

        let choix = Number(prompt("essest " + essest + "/10 : devinez le nombre entre 1 et 100 : "));

        while (isNaN(choix) || choix < 1 || choix > 100) {
            console.log("entre un nombre entre 1 et 100.");
            choix = Number(prompt("entre un nombre entre 1 et 100 :"));
        }

        if (choix === nombre) {
            console.log("GG  trouvé ");
            trouve = true;
            break;
        }

        if (choix < nombre) {
            console.log("nombre plus grand");
        } else {
            console.log("nombre plus petit");
        }

        console.log("il t reste " + (10 - essest) + " essests");
    }

    if (!trouve) {
        console.log("perdu le nombre : " + nombre);
    }

    recommencer = confirm("recommencer ?");
}
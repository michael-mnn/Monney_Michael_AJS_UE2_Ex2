/*
    Nom : Monney
    Prénom : Michael
    Classe : I.DA-P2A
    Titre de l"exercice : Exercice 1 validateur
    Objectif du fichier : valider un mot de passe donner par lutilisateur
*/

"use strict"

console.warn("Exercice 1");

const button = document.getElementById("button");

const caracteresSpeciaux = "!@#$%^&*";

function validerMotDePasse(motDePasse) {
    let aLongueur = motDePasse.length >= 8;
    let aMajuscule = false;
    let aMinuscule = false;
    let aChiffre = false;
    let aCaractereSpecial = false;
    document.getElementById("error").innerHTML = "";

    for (const element of motDePasse) {
        if (element >= 'A' && element <= 'Z') {
            aMajuscule = true;
        } else if (element >= 'a' && element <= 'z') {
            aMinuscule = true;
        } else if (element >= '0' && element <= '9') {
            aChiffre = true;
        }

        if (caracteresSpeciaux.includes(element)) {
            aCaractereSpecial = true;
        }
    }

    if (!aLongueur) {
        console.log("Il faut au moins 8 caractères dans le mot de passe.");
        document.getElementById("error").innerHTML += "<br>Il faut au moins 8 caractères dans le mot de passe.";
    }
    if (!aMajuscule) {
        console.log("Il n'y a pas de majuscule.");
        document.getElementById("error").innerHTML += "<br>Il n'y a pas de majuscule.";
    }
    if (!aMinuscule) {
        console.log("Il n'y a pas de minuscule.");
        document.getElementById("error").innerHTML += "<br>Il n'y a pas de minuscule.";
    }
    if (!aChiffre) {
        console.log("Il n'y a pas de chiffre.");
        document.getElementById("error").innerHTML += "<br>Il n'y a pas de chiffre.";
    }
    if (!aCaractereSpecial) {
        console.log("Il n'y a pas de caractère spécial.");
        document.getElementById("error").innerHTML += "<br>Il n'y a pas de caractère spécial.";
    }

    return aLongueur && aMajuscule && aMinuscule && aChiffre && aCaractereSpecial;
}
button.addEventListener("click", (event) => {
    event.preventDefault();
    const motDePasse = document.getElementById("motDePasse").value;
    if (validerMotDePasse(motDePasse)) {
        console.log("Le mot de passe est valide !");
    } else {
        console.log("Le mot de passe n'est pas valide.");
        console.log(motDePasse);
    }
});

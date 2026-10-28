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

const text = document.getElementById("reponse");
const inputNombre = document.getElementById("nombre");
const button = document.getElementById("button");
const formulaire = document.querySelector("form");

let nombreSecret = genererNombreAleatoire(1, 100);
let essais = 0;
const maxEssais = 10;

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const choix = Number(inputNombre.value);

    if (inputNombre.value.trim() === "" || !Number.isInteger(choix) || choix < 1 || choix > 100) {
        text.textContent = "entre un nombre entier entre 1 et 100";
        return;
    }

    essais++;

    if (choix === nombreSecret) {
        text.textContent = "gg  tas trouve le nombre en " + essais + " essai";
        button.disabled = true;
        return;
    }

    if (choix < nombreSecret) {
        text.textContent = "le nombre secret est plus grand ";
    } else {
        text.textContent = "le nombre secret est plus petit ";
    }

    const restants = maxEssais - essais;

    if (restants > 0) {
        text.textContent += "il reste " + restants + " essai";
    } else {
        text.textContent = "loose le nombre secret etait " + nombreSecret;
        button.disabled = true;
    }

    inputNombre.value = "";
    inputNombre.focus();
});

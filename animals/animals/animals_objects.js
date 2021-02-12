"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
        .then(response => response.json())
        .then(jsonData => {
            // when loaded, prepare objects
            prepareObjects(jsonData);
        });
}

function prepareObjects(jsonData) {
    jsonData.forEach(jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        const Animal = {
            name: "",
            type: "",
            desc: "",
        }

        const firstSpace = jsonObject.fullname.indexOf(" ");
        const lastSpace = jsonObject.fullname.lastIndexOf(" ");

        const animal = Object.create(Animal);
        console.log(Animal);
        animal.name = jsonObject.fullname.substring(0, firstSpace);
        animal.type = jsonObject.fullname.substring(lastSpace);
        animal.desc = jsonObject.fullname.substring(firstSpace + 5, lastSpace);
        animal.age = jsonObject.age;

        // TODO: MISSING CODE HERE !!!
        allAnimals.push(animal);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}
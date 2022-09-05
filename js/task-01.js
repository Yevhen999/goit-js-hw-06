const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);
console.log("");

const listOfCategories = document.querySelector("#categories");

// Animals------------------------------

const liOfAnimals = listOfCategories.firstElementChild;
// console.log(liOfAnimals);

const titleAnimals = liOfAnimals.querySelector("h2");
// console.log(titleAnimals.textContent);

console.log(`Category: ${titleAnimals.textContent}`);

const itemsOfAnimals = liOfAnimals.querySelectorAll("li");
console.log(`Elements: ${itemsOfAnimals.length}`);
console.log("");
// Products-----------------------
const liOfProducts = liOfAnimals.nextElementSibling;

const titleProducts = liOfProducts.querySelector("h2");
console.log(`Category: ${titleProducts.textContent}`);

const itemsOfProducts = liOfProducts.querySelectorAll("li");
console.log(`Elements: ${itemsOfProducts.length}`);
console.log("");
// // Technologies-----------------------
const liOfTechnologies = liOfProducts.nextElementSibling;

const titleTechnologies = liOfTechnologies.querySelector("h2");
console.log(`Category: ${titleTechnologies.textContent}`);

const itemsOfTechnologies = liOfTechnologies.querySelectorAll("li");
console.log(`Elements: ${itemsOfTechnologies.length}`);

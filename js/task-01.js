const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);
console.log("");

const listOfCategories = document.querySelector("#categories");

// Animals------------------------------

const liOfAnimals = listOfCategories.firstElementChild;

const titleAnimals = liOfAnimals.querySelector("h2");

console.log(`Category: ${titleAnimals.textContent}`);

const itemsOfAnimals = liOfAnimals.querySelectorAll("li");
console.log(countItems(itemsOfAnimals));
console.log("");
// Products-----------------------
const liOfProducts = liOfAnimals.nextElementSibling;

const titleProducts = liOfProducts.querySelector("h2");
console.log(`Category: ${titleProducts.textContent}`);

const itemsOfProducts = liOfProducts.querySelectorAll("li");
console.log(countItems(itemsOfProducts));
console.log("");
// // Technologies-----------------------
const liOfTechnologies = liOfProducts.nextElementSibling;

const titleTechnologies = liOfTechnologies.querySelector("h2");
console.log(`Category: ${titleTechnologies.textContent}`);

const itemsOfTechnologies = liOfTechnologies.querySelectorAll("li");
console.log(countItems(itemsOfTechnologies));

function countItems(itemsOf) {
  return `Elements: ${itemsOf.length}`;
}

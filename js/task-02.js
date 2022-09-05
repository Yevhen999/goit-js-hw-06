const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const oneItem = document.createElement("li");

  let ingredient = ingredients[i];
  oneItem.textContent = ingredient;
  oneItem.classList.add("item");

  items.push(oneItem);
}

console.log(items);
const createdIngredients = document.querySelector("#ingredients");

createdIngredients.append(...items);

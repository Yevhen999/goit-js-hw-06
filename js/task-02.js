const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createdIngredients = document.querySelector("#ingredients");
const newIngredients = [];

ingredients.map((ingredient) => {
  const elementRef = document.createElement("li");
  elementRef.textContent = ingredient;
  elementRef.classList.add("item");
  newIngredients.push(elementRef);
});

createdIngredients.append(...newIngredients);

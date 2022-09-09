const numberOfCategories = document.querySelector("#categories");
console.log(`Number of categories: ${numberOfCategories.children.length}`);
console.log("");

const itemsOfCategories = document.querySelectorAll(".item");

itemsOfCategories.forEach((item) => {
  const itemsOfNames = item.querySelectorAll("li");
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${itemsOfNames.length}`);
  console.log("");
});

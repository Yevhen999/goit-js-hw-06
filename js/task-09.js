function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnRef = document.querySelector(".change-color");

const onSpanRef = document.querySelector(".color");

onBtnRef.addEventListener("click", handleRef);

function handleRef() {
  const randomColor = getRandomHexColor();
  onSpanRef.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  console.log(onSpanRef.textContent, document.body.style.backgroundColor);
}

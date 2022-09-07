const onInputValue = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

onInputValue.addEventListener("input", onInput);

function onInput() {
  nameOutput.textContent = onInputValue.value;
}

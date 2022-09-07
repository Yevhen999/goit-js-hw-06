const onInputValue = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

onInputValue.addEventListener("input", onInput);

function onInput() {
  if (onInputValue.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = onInputValue.value;
  }
}

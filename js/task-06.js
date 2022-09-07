const checkValidInput = document.querySelector("#validation-input");
const validDataLength = document.querySelector('[data-length="6"]');

checkValidInput.addEventListener("blur", validation);

function validation() {
  let isValid = Number(validDataLength.dataset.length);
  let isValue = checkValidInput.value.length;
  if (isValid === isValue) {
    checkValidInput.classList.add("valid");
    checkValidInput.classList.remove("invalid");
  } else {
    checkValidInput.classList.remove("valid");
    checkValidInput.classList.add("invalid");
  }
}

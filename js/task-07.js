const onInputRef = document.querySelector("#font-size-control");

const onTextRef = document.querySelector("#text");

onTextRef.style.fontSize = `${onInputRef.value}px`;

onInputRef.addEventListener("input", handleRef);

function handleRef(event) {
  let isRange = Number(event.target.value);
  onTextRef.style.fontSize = `${isRange}px`;
}

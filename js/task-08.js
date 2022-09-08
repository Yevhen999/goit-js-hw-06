const onSubmitRef = document.querySelector(".login-form");

onSubmitRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elementsForm = event.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();

  // ------Alternative----------------------->
  //   --->  const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log(name, value);
  //     event.currentTarget.reset();
  //   });
}

const FORM = document.querySelector(".login-form");

const submitForm = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (!email.value || !password.value) {
    return alert("Усі поля повинні бути заповнені!");
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  event.target.reset();

  return data;
};

FORM.addEventListener("submit", (event) => {
  console.log(submitForm(event));
});

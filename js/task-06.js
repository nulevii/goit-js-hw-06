const DATA_INPUT = document.getElementById("validation-input");
const DATA_LENGTH = Number(DATA_INPUT.dataset.length);

const checkData = (event) => {
  if (event.target.value.length === DATA_LENGTH) {
    DATA_INPUT.classList.remove("invalid");
    DATA_INPUT.classList.add("valid");
    return;
  }

  DATA_INPUT.classList.remove("valid");
  DATA_INPUT.classList.add("invalid");
};

DATA_INPUT.addEventListener("blur", checkData);

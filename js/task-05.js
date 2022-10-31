const NAME_OUTPUT = document.getElementById("name-output");
const NAME_INPUT = document.getElementById("name-input");
const changeName = (Name) => {
  NAME_OUTPUT.innerHTML = Name.target.value || "Anonymus";
};

NAME_INPUT.addEventListener("input", changeName);

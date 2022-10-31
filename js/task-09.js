function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor);
const BODY = document.querySelector("body");
const BACKGOUND_COLOR = document.querySelector(".color");
const CHANGE_COLOR = document.querySelector(".change-color");

const onChangeColor = () => {
  const color = getRandomHexColor();
  BODY.style.backgroundColor = color;
  BACKGOUND_COLOR.textContent = color;
};

CHANGE_COLOR.addEventListener("click", onChangeColor);

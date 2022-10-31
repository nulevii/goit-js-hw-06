function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const INPUT_VALUE = document.querySelector("#controls input");
const CREATE_BUTTON = document.querySelector("[data-create]");
const DESTROU_BUTTON = document.querySelector("[data-destroy]");
const BOXES = document.querySelector("#boxes");

let boxSize = 30;

const createBoxes = (amount) => {
  const boxesArray = Array.from(new Array(amount)).map((_, i) => i);

  const boxesCollection = boxesArray.map((boxNumber) => {
    const box = document.createElement("div");
    const color = getRandomHexColor();
    box.style.backgroundColor = color;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxSize += 10;
    return box;
  });

  BOXES.append(...boxesCollection);

  BOXES.style.display = "flex";
  BOXES.style.gap = "20px";
  BOXES.style.flexWrap = "wrap";
  BOXES.style.marginTop = "20px";
};

const destroyBoxes = () => {
  BOXES.innerHTML = "";
  boxSize = 30;
};

CREATE_BUTTON.addEventListener("click", () => {
  createBoxes(Number(INPUT_VALUE.value));
});

DESTROU_BUTTON.addEventListener("click", destroyBoxes);

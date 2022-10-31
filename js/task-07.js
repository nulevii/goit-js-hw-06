const FONT_SIZE = document.getElementById("font-size-control");
const TEXT = document.getElementById("text");

const changeFontSize = (event) => {
  TEXT.style.fontSize = `${event.target.value}px`;
};

FONT_SIZE.addEventListener("input", changeFontSize);

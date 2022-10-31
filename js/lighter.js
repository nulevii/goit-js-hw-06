function update(event) {
  const x = event.clientX;
  const y = event.clientY;
  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}
document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

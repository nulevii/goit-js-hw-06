let counterValue = 0;

const COUNTER_ELEMENT = document.getElementById("value");
const INCREMENT = document.querySelector('button[data-action="increment"]');
const DECREMENT = document.querySelector('button[data-action="decrement"]');

COUNTER_ELEMENT.innerText = counterValue;

const increaseValue = () => {
  counterValue += 1;
  COUNTER_ELEMENT.innerText = counterValue;
};

const decreaseValue = () => {
  counterValue -= 1;
  COUNTER_ELEMENT.innerText = counterValue;
};

INCREMENT.addEventListener("click", increaseValue);
DECREMENT.addEventListener("click", decreaseValue);

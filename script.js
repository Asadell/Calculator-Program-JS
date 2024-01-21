const display = document.getElementById('display');

function appendToDisplay(text) {
  display.value += text;
}

function calculate() {
  display.value = eval(display.value); 
}

function clearDisplay() {
  display.value = '';
}


const inputV1 = document.querySelector('.v1');
const inputV2 = document.querySelector('.v2');
const resultElement = document.querySelector('.result');


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', calculate);
});


function calculate(event) {

  const symbol = event.target.classList[0];
  const value1 = parseFloat(inputV1.value);
  const value2 = parseFloat(inputV2.value);

  let result;
  switch (symbol) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case 'x':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    default:
      result = '';
  }

  resultElement.textContent = result;
}

//----------------------------------------------------------------------------------------------------------------

let dataArray = [];


function addToResult() {
  const inputElement = document.querySelector('.v3');
  const outputElement = document.querySelector('.result2');
  const inputValue = inputElement.value;
  dataArray.push(inputValue);

  const outputArray = dataArray.map((value, index) => `${index}: ${value}`);
  outputElement.innerHTML = outputArray.join('<br>');

  inputElement.value = '';
}


function changeValue() {
  const index = prompt('Enter the index:');
  const newValue = prompt('Enter the new value:');

  if (index !== null && newValue !== null) {
    const parsedIndex = parseInt(index, 10);
    if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < dataArray.length) {
      dataArray[parsedIndex] = newValue;

      const outputElement = document.querySelector('.result2');
      const outputArray = dataArray.map((value, index) => `${index}: ${value}`);
      outputElement.innerHTML = outputArray.join('<br>');
    }
  }
}

const changeButton = document.querySelector('.change');
changeButton.addEventListener('click', changeValue);

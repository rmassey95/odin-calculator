function add(a,b){
  return a + b;
}
function subtract(a,b){
  return a - b;
}
function multiply(a,b){
  return a * b;
}
function divide(a,b){
  return a / b;
}

function operate(equation){
  let test = equation.split(' ');
  console.log(test);
  switch(test[1]){
    case '+':
      return add(parseInt(test[0]),parseInt(test[2]));
    case '-':
      return subtract(parseInt(test[0]),parseInt(test[2]));
    case '*':
      return multiply(parseInt(test[0]),parseInt(test[2]));
    case '/':
      return divide(parseInt(test[0]),parseInt(test[2]));
  }
}

const btns = document.querySelectorAll('.buttons');
let displayValue = '';

btns.forEach(btn =>{
  btn.addEventListener('click', (e) => {
    if (e.target.id == '='){
      displayValue = operate(displayValue);
    } else if (displayValue){
      displayValue += ` ${e.target.id}`;
    } else {
      displayValue += e.target.id;
    }
    if (e.target.id == 'clear'){
      displayValue = '';
    }
    const outputContainer = document.querySelector('#output');
    outputContainer.textContent = displayValue;
  })
})


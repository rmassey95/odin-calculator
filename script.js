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
  ans = 0;
  switch(test[1]){
    case '+':
      ans = add(parseInt(test[0]),parseInt(test[2]));
      break;
    case '-':
      ans = subtract(parseInt(test[0]),parseInt(test[2]));
      break;
    case '*':
      ans = multiply(parseInt(test[0]),parseInt(test[2]));
      break;
    case '/':
      ans = divide(parseInt(test[0]),parseInt(test[2]));
      break;
  }
  console.log(ans.toString().length);
  if (ans.toString().length > 10) {
    ans = (Math.round(ans/(10**(ans.toString().length - 10))));
  }
  return ans;
}

const btns = document.querySelectorAll('.buttons');
let displayValue = '';

btns.forEach(btn =>{
  btn.addEventListener('click', (e) => {
    if ((e.target.id == '+') || (e.target.id == '*') || (e.target.id == '-') || (e.target.id == '/')) {
      displayValue += ` ${e.target.id} `;
    } else {
      displayValue += e.target.id;
    }
    if (e.target.id == 'clear'){
      displayValue = '';
    }
    if (e.target.id == '='){
      displayValue = operate(displayValue);
    }
    const outputContainer = document.querySelector('#output');
    outputContainer.textContent = displayValue;
  })
})


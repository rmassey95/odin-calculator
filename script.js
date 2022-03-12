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
  if (!test[2]){
    return equation;
  }
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
      if (parseInt(test[2]) == 0){
        return "Can't divide by zero";
      }
      ans = divide(parseInt(test[0]),parseInt(test[2]));
      break;
  }
  if (ans.toString().length > 10) {
    ans = (Math.round(ans/(10**(ans.toString().length - 10))));
  }
  return ans;
}

const btns = document.querySelectorAll('.buttons');
let displayValue = '';

btns.forEach(btn =>{
  btn.addEventListener('click', (e) => {
    if (displayValue == "Can't divide by zero") {
      displayValue = '';
    }
    if ((e.target.id == '+') || (e.target.id == '*') || (e.target.id == '-') || (e.target.id == '/')) {
      displayValue += ` ${e.target.id} `;
    } else if(e.target.id == '='){
      displayValue = operate(displayValue);
    } else if (e.target.id == 'clear'){
      displayValue = '';
    } else {
      displayValue += e.target.id;
    }
    
    const outputContainer = document.querySelector('#output');
    outputContainer.textContent = displayValue;
  })
})


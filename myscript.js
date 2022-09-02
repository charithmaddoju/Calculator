function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        return alert(`Can't divide with zero`);
    }
    return a/b;
}


function operate(operator,a,b){
    let ans = 0;
    switch(operator){
        case "+":
            ans = add(a,b);
            break;
        case "-":
            ans = subtract(a,b);
            break;
        case "*":
            ans = multiply(a,b);
            break;
        case "/":
            ans = divide(a,b);
            break;
    }
    return ans;
}

const container = document.querySelector('.container');
const display = document.querySelector('.display');
const text = document.querySelector('.text');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');
const equals = document.querySelector('#equals');
const reset = document.querySelector('.reset');
const back = document.querySelector('.back');


    let input1 = '';
    let input2 = '';
    let choice = '';
    let flag = 0;
    let temp = text.textContent;

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if(flag === 1 )
        {
            input2 += button.value.toString();
        }

        else if(button.value === '+' || button.value === '-' || button.value === '*' || button.value === '/' )
        {
            input1 = text.textContent;
            choice = button.value;
            flag = 1;
        }

        text.textContent += button.value;    
        
    })
})

console.log(input2)

equals.addEventListener('click', () => {
    result.textContent = operate(choice,parseInt(input1), parseInt(input2));
})
    
 reset.addEventListener('click', () => {
     text.textContent = '';
     result.textContent = '';
     input1 = '';
     input2 = '';
     choice = '';
     flag = 0;
 })


 back.addEventListener('click', () => {
     const someString = text.textContent;
     const newString = someString.slice(0,-1);
     text.textContent = newString;
 })
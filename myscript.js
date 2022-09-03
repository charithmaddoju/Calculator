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

        if(input1 != '' && choice != '' && input2 != ''){

        result.textContent = operate(choice,parseInt(input1), parseInt(input2));   

            if(button.value === '+' || button.value === '-' || button.value === '*' || button.value === '/' ){
                input1 = result.textContent;
                choice = button.value
                input2 = '';
            }
        }

        
   
        
    result.style.color = "grey";
    result.style.fontSize = "20px";
    text.style.fontSize = "30px";
    text.style.color = "black";
    })
})



equals.addEventListener('click', () => {
    result.textContent = operate(choice,parseInt(input1), parseInt(input2));
    result.style.color = "black";
    result.style.fontSize = "30px";
    text.style.fontSize = "20px";
    text.style.color = "grey";

      
    
})
    
 reset.addEventListener('click', () => {
     text.textContent = '';
     result.textContent = '';
     input1 = '';
     input2 = '';
     choice = '';
     flag = 0;
     result.style.color = "grey";
    result.style.fontSize = "20px";
    text.style.fontSize = "30px";
    text.style.color = "black";
 })


 back.addEventListener('click', () => {
     const someString = text.textContent;
     const newString = someString.slice(0,-1);
     text.textContent = newString;
     if(input2 != ''){
        input2 = input2.slice(0,-1);
        result.textContent = operate(choice,parseInt(input1), parseInt(input2));     
     }
     else{
        
        choice === '';
        flag = 0;
        result.textContent = '';
     }
     result.style.color = "grey";
    result.style.fontSize = "20px";
    text.style.fontSize = "30px";
    text.style.color = "black";
 })
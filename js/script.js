
 
 //lab task
 // create a new calulator project folder
 // try and extract some operation inside a function
 // One - call the getElement function where neccessary
 // Create the Sum, Minus, Division, Multiply, Modulo, as function and call them where neccessary.
//  let signal;

 function getElement(elementId){
    return document.getElementById(elementId);
 }

const txtResult = getElement("txtResult");
const txtInput1 = getElement("txtInput1");
const txtInput2 = getElement("txtInput2");

const sumSign = getElement("sumSign");
const minusSign = getElement("minusSign");
const multiplySign = getElement("multiplySign");
const divideSign = getElement("divideSign");
const moduloSign = getElement("moduloSign");

let signal;
sumSign.addEventListener("click",  meCheck);
minusSign.addEventListener("click",  meCheck);
multiplySign.addEventListener("click", meCheck);
divideSign.addEventListener("click", meCheck);
moduloSign.addEventListener("click", meCheck);
signEqual.addEventListener("click", checkSign);
clear.addEventListener("click", ()=>{txtResult.value ='';  txtInput1.value='', txtInput2.value='' });


function meCheck(){
    signal = event.target.value;
}

function checkSign (){
    let num1 = parseInt(txtInput1.value);
    let num2 = parseInt(txtInput2.value);

   
    if(signal == "+"){
        txtResult.value = sum(num1, num2);
       
    }
    
    else if (signal == "-"){
        txtResult.value = minus(num1, num2);
        
    }
    
    else if (signal == "*"){
        txtResult.value = multiply(num1, num2);
       
    }
    
    else if (signal == "/"){

        txtResult.value = divide(num1, num2);
    }
    
    else{
        txtResult.value = modulo(num1, num2);
        
    }
    
}



function sum (n1, n2){
    return n1 + n2;
}

function minus (num1, num2){
    return  num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    if(num2 == 0){
        return "cannot divide a number by zero";
    }else{
        return num1 / num2;
    }
}

function modulo (num1, num2){
    if(num2 == 0){
        return "cannot modulo a number by zero";
    }else{
        return num1 % num2;
    }
}












// Pin Generate Section
        
const pinGeneratorBtn = document.getElementById("pin-generate-btn");
pinGeneratorBtn.addEventListener("click", function(){
    const pinValue = Math.random()*10000;
    const pinNumber = Math.round(pinValue);
    document.getElementById("my-pin-number").value = pinNumber;
})


// Pin Input Section

let previousInputValue = "";
const one = document.getElementById("one");
one.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 1;
    previousInputValue = document.getElementById("input-pin-number").value;
})    
const two = document.getElementById("two");
two.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 2;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const three = document.getElementById("three");
three.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 3;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const four = document.getElementById("four");
four.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 4;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const five = document.getElementById("five");
five.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 5;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const six = document.getElementById("six");
six.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 6;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const seven = document.getElementById("seven");
seven.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 7;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const eight = document.getElementById("eight");
eight.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 8;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const nine = document.getElementById("nine");
nine.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 9;
    previousInputValue = document.getElementById("input-pin-number").value;
})
const zero = document.getElementById("zero");
zero.addEventListener("click", function(){
    document.getElementById("input-pin-number").value = previousInputValue + 0;
    previousInputValue = document.getElementById("input-pin-number").value;
})


// Pin Matching Section

const pinMatchingVerification = document.getElementById("pin-matching-btn");
pinMatchingVerification.addEventListener("click", function(){
    if(document.getElementById("my-pin-number").value == document.getElementById("input-pin-number").value){
        document.getElementById("pin-matched").style.display = "block";
    }
    else{
        document.getElementById("pin-not-matched").style.display = "block";
    }        
})


// Clear All Input Section

document.getElementById("clear-all-input").addEventListener("click", function(){
    document.getElementById("input-pin-number").value = "";
    previousInputValue = "";
})
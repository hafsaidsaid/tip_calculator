//Get elements 
const billInput = document.querySelector(".tipContainer form input#billInput");
console.log(billInput);

const tipInput = document.querySelector(".tipContainer form input#tipInput");
console.log(tipInput);

const calcBtn = document.querySelector(".tipContainer .calcBtn");
console.log(calcBtn);


const totalCon = document.querySelector(".tipContainer .total strong");
console.log(calcBtn);

//click on calcBtn
calcBtn.addEventListener("click", calcTotal);


//Function calculate Tip
function calcTotal() {
    let billAm = getNumInp(billInput);
    let tipPourc = getNumInp(tipInput);
    let total = billAm + (billAm * tipPourc)/100;
    console.log(total);
    totalCon.textContent = `${total}$`;
}


//Function getNumInp
function getNumInp(input) {
    return parseFloat(input.value);
}
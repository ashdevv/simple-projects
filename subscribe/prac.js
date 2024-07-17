

const myCheckBox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");


const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribed!`;
    }
    else{
        subResult.textContent = `You are not Subscribe.`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying w/ VISA`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying w/ MASTER CARD`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying w/ PAYPAL`;
    }
    else {
        paymentResult.textContent = `You must select payment type`;
    }
}
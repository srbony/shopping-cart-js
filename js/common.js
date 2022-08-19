//function for total amount of phoneprice+casePrice
function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString = phoneTotalElement.innerText;
    const phoneTotal = parseInt(phoneTotalString);
    return phoneTotal;


}
//set element in any element with elementId and value

function setTextElementById(elementId, value) {
    //get subtotal element
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}






//function for calculate subtotal value
function calculateSubTotal() {
    const phoneTotal = getTextElementById('phone-total');
    const caseTotal = getTextElementById('case-total');
    const subTotal = phoneTotal + caseTotal;
    setTextElementById('sub-total', subTotal);


    //calculate tax
    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amount', taxAmount);

    const finalAmount = subTotal + taxAmount;
    setTextElementById('final-total', finalAmount)


}

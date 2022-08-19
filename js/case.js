/*
1.add event listener to the case plus button
2.get the value of case number field(input field)using.value
3.convert the number into intiger
4.calculate the new case number(increasing)
5.set value using .value into the case input field
*/

function updateCaseNumber(isIncrease) {
    const caseNumberFiled = document.getElementById('case-number-field');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease == true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFiled.value = newCaseNumber;



    return newCaseNumber;

}
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}



document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal()
});



document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal()
})
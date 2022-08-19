
function updatePhoneTotal(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrease == true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;


}
function updatePhonePrice(newPhoneNumber) {
    const phoneTotal = document.getElementById('phone-total');
    const total = newPhoneNumber * 1219;
    phoneTotal.innerText = total;


}




document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneNumber = updatePhoneTotal(true);
    //calculate function
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal()


})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneTotal(false);


    //calculate updatePhonePRICE function call
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal();


})


console.log("Phone file added");
//function for phone price

//function for phoneInput.value
function updatePhoneNumber(isIncrease) {
  const phoneInput = document.getElementById("phone-input");
  const phoneInputString = phoneInput.value;
  const prevPhoneInputCount = parseInt(phoneInputString);
  let newPhoneInputCount;
  if (isIncrease === true) {
    newPhoneInputCount = prevPhoneInputCount + 1;
  } else {
    newPhoneInputCount = prevPhoneInputCount - 1;
  }
  phoneInput.value = newPhoneInputCount;
  return newPhoneInputCount;
}
function updatePriceTotal(newPhoneNumber) {
  const phonePriceTotal = newPhoneNumber * 1219;
  const phonePriceElement = document.getElementById("phone-price");
  phonePriceElement.innerText = phonePriceTotal;
}
//function for getting subtotal
function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhontTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhontTotalString);
  return currentPhoneTotal;
}
document
  .getElementById("phone-btn-plus")
  .addEventListener("click", function () {
    let newPhoneCount = updatePhoneNumber(true);
    updatePriceTotal(newPhoneCount);

    // calculateSubtotal();
    calculateSubtotal();
  });
document
  .getElementById("phone-btn-minus")
  .addEventListener("click", function () {
    const newPhoneCount = updatePhoneNumber(false);
    updatePriceTotal(newPhoneCount);
    // calculateSubtotal();
    calculateSubtotal();
  });
document.getElementById("remove-phone").addEventListener("click", function () {
  const itemCart = document.getElementById("phone-item");
  itemCart.remove();
});

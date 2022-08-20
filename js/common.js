console.log("common file added");
//function for getting input element
function getElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const phoneTotalElementString = phoneTotalElement.innerText;
  const phoneTotal = parseFloat(phoneTotalElementString);
  return phoneTotal;
}
//function for phoneInput.valuac xcce

//code for adding subtotal value

function getElementValueById(elementId, value) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = value;
}
function calculateSubtotal() {
  const currentPhoneTotal = getTextElementValueById("phone-price");
  const currentCaseTotal = getTextElementValueById("case-price");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  getElementValueById("sub-total", currentSubTotal);
  //function for tax calculation
  const taxAmount = parseFloat((currentSubTotal * 0.1).toFixed(2));
  getElementValueById("tax-amount", taxAmount);
  //main total
  const mainTotal = currentSubTotal + taxAmount;
  getElementValueById("main-total", mainTotal);
  return mainTotal;
}

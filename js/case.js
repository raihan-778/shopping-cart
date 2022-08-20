console.log("case file added");

//function for case input
function updateCaseNumber(isIncrease) {
  const caseInput = document.getElementById("case-input");
  const caseInputString = caseInput.value;
  const prevCaseInputCount = parseInt(caseInputString);
  let newCaseInputCount;
  if (isIncrease === true) {
    newCaseInputCount = prevCaseInputCount + 1;
  } else {
    newCaseInputCount = prevCaseInputCount - 1;
  }
  caseInput.value = newCaseInputCount;
  return newCaseInputCount;
}
function caseTotalPrice(newCaseInputCount) {
  const casePriceTotal = newCaseInputCount * 59;
  const casePrice = document.getElementById("case-price");
  casePrice.innerText = casePriceTotal;
}

document.getElementById("case-btn-plus").addEventListener("click", function () {
  const newInputCount = updateCaseNumber(true);
  caseTotalPrice(newInputCount);
  // calculateSubtotal();

  calculateSubtotal();
});
document
  .getElementById("case-btn-minus")
  .addEventListener("click", function () {
    const newInputCount = updateCaseNumber(false);
    caseTotalPrice(newInputCount);
    // calculateSubtotal();
    calculateSubtotal();
  });
document.getElementById("remove-case").addEventListener("click", function () {
  const itemCart = document.getElementById("case-item");
  itemCart.remove();
});

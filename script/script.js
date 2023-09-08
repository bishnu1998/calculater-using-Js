let CalculatorString = "";
var ans = 0;
function selectCalculatorField(event) {
  const selectedField = event.target;

  const selectedColumn = selectedField.dataset.col - 1;
  const selectedrow = selectedField.dataset.row - 1;

  const selectedCalculatorElement = calculatorData[selectedrow][selectedColumn];
  if (selectedCalculatorElement == "=") {
    CalculatorString = eval(CalculatorString);
    ans = CalculatorString;
    displaySectionElement.value = CalculatorString;
  } else if (selectedCalculatorElement == "AC") {
    CalculatorString = "";
    displaySectionElement.value = CalculatorString;
  } else if (selectedCalculatorElement == "sqrt") {
    var sqrtValue = Number(CalculatorString);
    CalculatorString = Math.sqrt(sqrtValue);
    ans = CalculatorString;
    displaySectionElement.value = CalculatorString;
  } else if(selectedCalculatorElement == 'Ans'){
    CalculatorString = ans;
    displaySectionElement.value = ans;
  }
  else {
    CalculatorString += selectedCalculatorElement;
    displaySectionElement.value = CalculatorString;
  }
}

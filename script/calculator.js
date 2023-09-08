const calculatorData = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "*"],
  [0, "AC", "=", "/"],
  ['Ans','sqrt','%','.'],
];
const displaySectionElement = document.getElementById("display-content");

const calculatorBoardElement = document.getElementById("calculator-board");


calculatorBoardElement.addEventListener("click", selectCalculatorField);

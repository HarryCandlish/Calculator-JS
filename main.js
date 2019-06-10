var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var zeroBtn = document.getElementById("zero");

var decimalBtn = document.getElementById("decimal");
var clearBtn = document.getElementById("clear");
var backspaceBtn = document.getElementById("backspace");

var displayValElement = document.getElementById("display-item");

var displayVal = "0";
var pendingVal;
var evalStingArray = [];

var calNumBtns = document.getElementByClassName("grid-item number");
var calOperatorBtns = document.getElementByClassName("grid-item operator");

var updateDisplayVal = clickObj => {
  var btnText = clickObj.target.innerText;

  if (displayVal === "0") displayVal = "";

  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

for (let i = 0; i < calNumBtns.length; i++) {
  calNumBtns[i].addEventListener("click", updateDisplayVal, false);
}
// for (let i = 0; i < calOperatorBtns.length; i++) {
//calOperatorBtns [i] .addEventListener('click', updateDisplayVal, false)

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

clipboardEl.addEventListener("click", (e) => {
  e.preventDefault();
  let randPass = navigator.clipboard.writeText(resultEl.innerText);
  alert("password Copied to clipboard");
  resultEl.textContent = " ";
});

generateEl.addEventListener("click", () => {
  let len = lengthEl.value;
  // for input length
  if (len === "" || len < 4 || len > 20) {
    alert("Enter or select some value between 4 and 20");
  }
  // for check boxes
  if (uppercaseEl.checked === true) {
    var up = randomFunc.upper(len);
  }
  if (lowercaseEl.checked === true) {
    var low = randomFunc.lower(len);
  }
  if (numbersEl.checked === true) {
    var numb = randomFunc.number(len);
  }
  if (symbolsEl.checked === true) {
    var sym = randomFunc.symbol(len);
  }

  if (
    symbolsEl.checked !== true &&
    uppercaseEl.checked !== true &&
    lowercaseEl.checked !== true &&
    numbersEl.checked !== true
  ) {
    alert("please check atleast one checkbox");
    resultEl.innerText = "";
  } else {
    resultEl.innerText = generatePassword(low, up, numb, sym, len);
  }
});

function generatePassword(lower, upper, number, symbol, length) {
  let newWord = "";
  if (lower !== undefined) {
    newWord += lower;
  }
  if (upper !== undefined) {
    newWord += upper;
  }
  if (number !== undefined) {
    newWord += number;
  }
  if (symbol !== undefined) {
    newWord += symbol;
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    result += newWord[Math.ceil(Math.random() * newWord.length - 1)];
  }
  return result;
}

function getRandomLower(num) {
  let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  let resLower = "";
  for (let i = 0; i < num; i++) {
    resLower +=
      lowerLetters[Math.ceil(Math.random() * lowerLetters.length - 1)];
  }
  return resLower;
}

function getRandomUpper(num) {
  let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resUpper = "";
  for (let i = 0; i < num; i++) {
    resUpper +=
      upperLetters[Math.ceil(Math.random() * upperLetters.length - 1)];
  }
  return resUpper;
}

function getRandomNumber(num) {
  let numbers = `1234567890`;
  let newNum = "";
  for (let i = 0; i < num; i++) {
    newNum += numbers[Math.ceil(Math.random() * numbers.length - 1)];
  }
  return newNum;
}

function getRandomSymbol(num) {
  let symbols = `!"#$%&'()*+,-./:;<=>?@{}^_'{|}~ `;
  let symbl = "";
  for (let i = 0; i < num; i++) {
    symbl += symbols[Math.ceil(Math.random() * symbols.length - 1)];
  }
  return symbl;
}

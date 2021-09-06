const janamDin = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

checkButton.addEventListener("click", checkBirthdayIsLucky);

function checkBirthdayIsLucky() {
  const dob = janamDin.value;
  const sum = calculateSum(dob);
  if (dob && sum) {
    checkingYourLuck(sum, luckyNumber.value);
  } else {
    outputBox.innerHTML = "Please enter both the input fields😤";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function checkingYourLuck(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerHTML = "Your birthday is so lucky🎉";
  } else {
    outputBox.innerHTML = "Your birthday is not so lucky😐";
  }
}

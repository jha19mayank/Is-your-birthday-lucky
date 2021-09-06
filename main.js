const janamDin = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");

checkButton.addEventListener("click", checkBirthdayIsLucky);

function checkBirthdayIsLucky() {
  const dob = janamDin.value;
  const sum = calculateSum(dob);
  checkingYourLuck(sum, luckyNumber.value);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "0");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function checkingYourLuck(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    console.log("Your birthday is so lucky🎉");
  } else {
    console.log("Your birthday is not so lucky😐");
  }
}

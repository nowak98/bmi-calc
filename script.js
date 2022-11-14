// variable declarations
let button = document.querySelector(".bmi__btn");
let inputHeight = document.querySelector("#height");
let inputWeight = document.querySelector("#weight");

// BMI calculation function
const calcBMI = function () {
  {
    // initial assumptions,
    // selection of items to display results,
    // selection of values
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const bmi = document.getElementById("bmi-value");
    const bmiDescription = document.getElementById("bmi-description");
    let height_status = false;
    let weight_status = false;
    // In case the height is not correct
    if (height === "" || isNaN(height) || height <= 0) {
      bmiDescription.innerHTML = "Please, write a proper height";
      bmiDescription.style.color = "red";
      bmiDescription.style.fontSize = "2rem";
      bmiDescription.style.textAlign = "center";
      bmi.innerHTML = "";
    } else {
      height_status = true;
    }
    // In case the weight is not correct
    if (weight === "" || isNaN(weight) || weight <= 0) {
      bmiDescription.innerHTML = "Please, write a proper weight";
      bmiDescription.style.color = "red";
      bmiDescription.style.fontSize = "2rem";
      bmiDescription.style.textAlign = "center";
      bmi.innerHTML = "";
    } else {
      weight_status = true;
    }
    // when all data is ok - bmi calculation, displaying the result on the page
    if (height_status && weight_status) {
      const countedBMI = (weight / Math.pow(height / 100, 2)).toFixed(2);

      bmi.innerHTML = countedBMI;

      if (countedBMI < 18.5 && countedBMI >= 12) {
        bmi.style.color = "#ffec8b";
        bmiDescription.innerHTML = "You are underweight";
      } else if (countedBMI > 18.5 && countedBMI < 24.9) {
        bmi.style.color = "#2ecc71";
        bmiDescription.innerHTML = "Healthy weight!";
      } else if (countedBMI > 25 && countedBMI < 29.9) {
        bmi.style.color = "#fbc093";
        bmiDescription.innerHTML = "You are overweight";
      } else if (countedBMI >= 30 && countedBMI < 89.9) {
        bmi.style.color = "#6c7a89";
        bmiDescription.innerHTML = "You are obese";
      } else if (countedBMI >= 90 || countedBMI < 12) {
        bmiDescription.style.color = "red";
        bmi.innerText = "";
        bmiDescription.innerHTML = "Make sure that all the data is correct";
        bmiDescription.style.textAlign = "center";
      }
    }
  }
};

// calling the function on the button and enter
button.addEventListener("click", calcBMI);
inputHeight.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    calcBMI();
  }
});
inputWeight.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    calcBMI();
  }
});

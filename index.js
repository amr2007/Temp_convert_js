// Temperature Convert Program
const TempInput = document.getElementById("TemperatureInput");
const ToF = document.getElementById("CelsiusToFahrenheit");
const ToC = document.getElementById("FahrenheitToCelsius");
const result = document.getElementById("Result");
let temp;

function Convert() {
    temp = Number(TempInput.value);

    if (ToF.checked) {
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(2)}\u00B0F`;
    }
    else if (ToC.checked) {
        temp = (temp - 32) * (5 / 9);
        result.textContent = `${temp.toFixed(2)}\u00B0C`;
    }
    else {
        result.textContent = `Select a unit`;
    }
}

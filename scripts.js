function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");

    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const kelvinValue = parseFloat(kelvinInput.value);

    if (!isNaN(celsiusValue)) {
        const fahrenheit = celsiusValue * 9 / 5 + 32;
        const kelvin = celsiusValue + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        const celsius = (fahrenheitValue - 32) * 5 / 9;
        const kelvin = (fahrenheitValue - 32) * 5 / 9 + 273.15;
        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else if (!isNaN(kelvinValue)) {
        const celsius = kelvinValue - 273.15;
        const fahrenheit = (kelvinValue - 273.15) * 9 / 5 + 32;
        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
}

function resetInputs() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");

    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
}


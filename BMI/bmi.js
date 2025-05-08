
const form = document.getElementById("bmi-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `❌ Please enter a valid height!`;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `❌ Please enter a valid weight!`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `✅ Your BMI is <strong>${bmi}</strong>`;

    }
});

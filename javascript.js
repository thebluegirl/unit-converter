const numText = document.getElementById("num-text");
const lengthConvert = document.getElementById("length-convert");
const volumeConvert = document.getElementById("volume-convert");
const massConvert = document.getElementById("mass-convert");
const convertBtn = document.getElementById("convert-btn");

function validateNumberType() {
    if (isNaN(+(numText.value))) {
        return false;
    } else {
        return true;
    }
}

function nanRender() {
    lengthConvert.innerText = "This can only work with numbers. Please enter a number and try again.";
    volumeConvert.innerText = "This can only work with numbers. Please enter a number and try again.";
    massConvert.innerText = "This can only work with numbers. Please enter a number and try again.";
}

function convertToFeet() {
    return (+(numText.value) * 3.281);
}

function convertToMeter() {
    return (+(numText.value) / 3.281);
}

function convertToLitres() {
    return (+(numText.value) / 0.264); 
}

function convertToGallons() {
    return (+(numText.value) * 0.264);
}

function convertToKilograms() {
    return (+(numText.value) / 2.204);
}

function convertToPounds() {
    return (+(numText.value) * 2.204);
}

function render() {
    lengthConvert.innerText = `${(numText.value)} meters = ${convertToFeet().toFixed(3)} feet | ${(numText.value)} feet = ${convertToMeter().toFixed(3)} meters`;
    volumeConvert.innerText = `${(numText.value)} litres = ${convertToGallons().toFixed(3)} gallons | ${(numText.value)} gallons = ${convertToLitres().toFixed(3)} litres`;
    massConvert.innerText = `${(numText.value)} kilograms = ${convertToPounds().toFixed(3)} pounds | ${(numText.value)} pounds = ${convertToKilograms().toFixed(3)} kilograms`;
}

convertBtn.addEventListener("click", function (e) {
    if (!validateNumberType()) {
        nanRender();
    } else {
        render();
    }
})
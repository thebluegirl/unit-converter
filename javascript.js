const numText = document.getElementById("num-text");
const lengthConvert = document.getElementById("length-convert");
const volumeConvert = document.getElementById("volume-convert");
const massConvert = document.getElementById("mass-convert");
const convertBtn = document.getElementById("convert-btn");

function validateNumberType() {
    if (+(numText.value) === isNaN) {
        return alert("This can only work with numbers. Please put in only numbers");
    } 
}

function convertToFeet() {
    validateNumberType();
    return (+(numText.value) * 3.281);

}

function convertToMeter() {
    validateNumberType();
    return (+(numText.value) / 3.281);
}

function convertToLitres() {
    validateNumberType();
    return (+(numText.value) / 0.264); 
}

function convertToGallons() {
    validateNumberType();
    return (+(numText.value) * 0.264);
}

function convertToKilograms() {
  validateNumberType();
  return (+(numText.value) / 2.204);
}

function convertToPounds() {
  validateNumberType();
  return (+(numText.value) * 2.204);
}

function render() {
    lengthConvert.innerText = `${(numText.value)} meters = ${convertToFeet().toFixed(3)} feet | ${(numText.value)} feet = ${convertToMeter().toFixed(3)} meters`;
    volumeConvert.innerText = `${(numText.value)} litres = ${convertToGallons().toFixed(3)} gallons | ${(numText.value)} gallons = ${convertToLitres().toFixed(3)} litres`;
    massConvert.innerText = `${(numText.value)} kilograms = ${convertToPounds().toFixed(3)} pounds | ${(numText.value)} pounds = ${convertToKilograms().toFixed(3)} kilograms`;
}

convertBtn.addEventListener("click", function (e) {
    validateNumberType();
    render();
})

const slider = document.getElementById("lengthSlider");
const output = document.getElementById("lengthValue");

slider.addEventListener("input", () => {
    output.textContent = slider.value;
});
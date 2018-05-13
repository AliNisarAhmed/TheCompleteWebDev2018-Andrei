const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const css = document.querySelector("h3");
const body = document.querySelector("#gradient");

css.textContent = body.style.background + ";";

function setGradient() {
    body.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);
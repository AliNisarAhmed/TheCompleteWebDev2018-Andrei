const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const css = document.querySelector("h3");
const body = document.body;
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");


// console.log(document.body.style.background)   // Why is this empty???
// css.textContent = body.style.background + ";";

function setGradient() {
    body.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}

function randomInt() {
    return (Math.round(Math.random() * 256)) + 1; 
}

function randomHex() {
    let hex = randomInt().toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }

    return hex;
}

function randomColor() {
    return `#${randomHex()}${randomHex()}${randomHex()}`;
}


color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);

button1.addEventListener("click", function() {
    color1.value = randomColor();
    setGradient();
});

button2.addEventListener("click", function() {
    color2.value = randomColor();
    setGradient();
})



const right_button = document.querySelector(".button-addOnRight");
const left_button = document.querySelector(".button-addOnLeft");
const input = document.querySelector(".input");

// right_button.addEventListener("click", function() {
//     let value = Number(input.value);
//     value += 1;
//     input.value = String(value);
// })

// left_button.addEventListener("click", function () {
//     let value = Number(input.value);
//     value -= 1;
//     input.value = value;
// })


// REFACTORING

function incrementValue(input, amount) {
    let value = Number(input.value);
    value += amount;
    input.value = String(value);
}

right_button.addEventListener("click", () => {
    incrementValue(input, 1);
})
left_button.addEventListener("click", () => {
    incrementValue(input, -1);
});
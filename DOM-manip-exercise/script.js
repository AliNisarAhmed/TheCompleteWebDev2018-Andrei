var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let listItems = document.querySelectorAll(".list-items");
let deleteButtons = document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	console.log(li);
	li.innerHTML = `<span class="delete">X</span></span><span class="list-items">${input.value}</span>`;
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

//===============================================

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(event) {
	let targetClassList = event.target.classList.value.split(" ");
	if(targetClassList.includes("list-items")) {
		if(targetClassList.includes("done")) {
			event.target.classList.remove("done");
		} else {
			event.target.classList.add("done");
		}
	}
	
})

// for(let i = 0; i < listItems.length; i++) {
// 	listItems[i].addEventListener("click", function(e) {
// 		e.stopPropagation();
// 		e.target.classList.toggle("done");
// 	})
// }

for(let i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", function () {
		let parent = deleteButtons[i].parentElement;
		parent.remove();
	})
}
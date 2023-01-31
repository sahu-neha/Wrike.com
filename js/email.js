document.querySelector("#logo").addEventListener("click", () => {
	window.location.href = "index.html";
});

// ----------------setting email to local-storage------------------//

let button = document.querySelector("button");

button.addEventListener("click", (el) => {
	el.preventDefault();

	let input = document.querySelector("input[type='email']").value;

	if (input == "") {
		alert("Please enter your email");
	} else {
		localStorage.setItem("email", JSON.stringify(input));
		window.location.href = "password.html";
	}
});
// ----------------login-function-with-enter-key------------------//

document
	.querySelector("input[type='email']")
	.addEventListener("keypress", (el) => {
		if (el.key == "Enter") {
			button.click();
			console.log("click");
		}
	});

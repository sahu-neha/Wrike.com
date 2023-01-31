document.querySelector("#logo").addEventListener("click", () => {
	window.location.href = "index.html";
});
// ----------------redirect-function------------------//

window.addEventListener("load", () => {
	let cred = JSON.parse(localStorage.getItem("cred"));
	if (cred) {
		window.location.href = "index.html";
		localStorage.setItem("isLogin", true);
	}
});

// ----------------getting email/password from local-storage and adding isLogin to the object------------------//

let cred = JSON.parse(localStorage.getItem("cred"));

// ----------------login-function------------------//

let button = document.querySelector("button");

button.addEventListener("click", (event) => {
	event.preventDefault();

	let emailEntered = document.querySelector("input[type='email']").value;
	let passwordEntered = document.querySelector("input[type='password']").value;

	if (emailEntered == "" || passwordEntered == "") {
		alert("Please enter your credentials");
	} else {
		if (emailEntered == cred.email && passwordEntered == cred.password) {
			console.log("Login successful");
			window.location.href = "index.html";
			localStorage.setItem("isLogin", true);
		} else {
			alert("Incorrect credentials");
		}
	}
});

// ----------------login-function-with-enter-key------------------//

document
	.querySelector("input[type='password']")
	.addEventListener("keypress", (el) => {
		if (el.key == "Enter") {
			button.click();
			console.log("click");
		}
	});

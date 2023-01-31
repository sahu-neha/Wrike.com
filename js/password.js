document.querySelector("#logo").addEventListener("click", () => {
	window.location.href = "index.html";
});
// ----------------getting email from local-storage and adding password to the object------------------//

let email = JSON.parse(localStorage.getItem("email"));

let button = document.querySelector("button");

button.addEventListener("click", (el) => {
	el.preventDefault();

	let input = document.querySelector("input[type='password']").value;

	if (input == "") {
		alert("Please enter your password");
	} else if (input.length < 6) {
		alert("Password too small");
	} else {
		let credential = {
			email: email,
			password: input,
		};
		localStorage.removeItem("email");

		localStorage.setItem("cred", JSON.stringify(credential));
		window.location.href = "login.html";
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

// ----------------additional css/function------------------//

let wrongEmail = document.querySelector("#wrongEmail");
wrongEmail.innerHTML = `${email} | Wrong Email?`;

wrongEmail.onmouseover = () => {
	wrongEmail.style.cursor = "pointer";
	wrongEmail.style.color = "blue";
};

wrongEmail.onmouseout = () => {
	wrongEmail.style.cursor = "pointer";
	wrongEmail.style.color = "black";
};

wrongEmail.onclick = () => {
	window.location.href = "email.html";
};

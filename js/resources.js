document.querySelector("#start").addEventListener("click", () => {
	window.location.href = "email.html";
});

document.querySelector("#login").addEventListener("click", () => {
	window.location.href = "login.html";
});

// <!-------------- nav-bar-close-button ---------------->

let btn = document.querySelector(".close");

btn.onclick = () => {
	btn.parentElement.remove();
	console.log("click");
	document.querySelector("main").style.marginTop = "68px";
};

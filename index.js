// -----------------top-nav-closing-function------------------//

let btn = document.querySelector(".close");

btn.onclick = () => {
	btn.parentElement.remove();
	console.log("click");
	document.querySelector(".firstSection").style.marginTop = "68px";
};

// -----------------gird-hover-color-changing-function------------------//

let gridH2 = document.querySelectorAll(".grid>div>h2");
let gridP = document.querySelectorAll(".grid>div>p");
let divGrid = document.querySelectorAll(".grid>div");
let gridH3 = document.querySelectorAll(".grid>div>h3");

divGrid[0].onmouseover = () => {
	gridP[0].style.color = "white";
	gridH2[0].style.color = "white";
	gridH3[0].style.color = "rgb(140, 240, 155)";
};

divGrid[0].onmouseout = () => {
	gridP[0].style.color = "#2b3857";
	gridH3[0].style.color = "rgb(9, 86, 86)";
	gridH2[0].style.color = "#181f38";
};

divGrid[1].onmouseover = () => {
	gridP[1].style.color = "white";
	gridH2[1].style.color = "white";
	gridH3[1].style.color = "rgb(140, 240, 155)";
};

divGrid[1].onmouseout = () => {
	gridP[1].style.color = "#2b3857";
	gridH3[1].style.color = "rgb(9, 86, 86)";
	gridH2[1].style.color = "#181f38";
};

divGrid[2].onmouseover = () => {
	gridP[2].style.color = "white";
	gridH2[2].style.color = "white";
	gridH3[2].style.color = "rgb(140, 240, 155)";
};

divGrid[2].onmouseout = () => {
	gridP[2].style.color = "#2b3857";
	gridH3[2].style.color = "rgb(9, 86, 86)";
	gridH2[2].style.color = "#181f38";
};

divGrid[3].onmouseover = () => {
	gridP[3].style.color = "white";
	gridH2[3].style.color = "white";
	gridH3[3].style.color = "rgb(140, 240, 155)";
};

divGrid[3].onmouseout = () => {
	gridP[3].style.color = "#2b3857";
	gridH3[3].style.color = "rgb(9, 86, 86)";
	gridH2[3].style.color = "#181f38";
};

// ----------------login-logout-function------------------//

window.addEventListener("load", () => {
	let isLogin = localStorage.getItem("isLogin");

	if (isLogin) {
		document.querySelector("#login").innerHTML = "Log out";

		document.querySelector("#login").addEventListener("click", () => {
			localStorage.removeItem("isLogin");
			localStorage.removeItem("cred");
			setInterval(() => {
				window.location.href = "email.html";
			}, 1000);
		});
	}
});

// ----------------Get-started-function------------------//

// if (document.querySelector(".enteredEmail").value != "") {
// 	document.querySelector("#linkEmail").addEventListener("click", () => {
// 		window.location.href = "password.html";
// 	});
// } else {
// 	document.querySelector("#linkEmail").addEventListener("click", () => {
// 		window.location.href = "email.html";
// 	});
// }


document.querySelector("#start").addEventListener("click", () => {
	setInterval(() => {
		window.location.href = "email.html";
	}, 1000);
});

document.querySelector(".get").addEventListener("click", () => {
	setInterval(() => {
		window.location.href = "email.html";
	}, 1000);
});

document.querySelector("#linkEmail").addEventListener("click", () => {
	setInterval(() => {
		window.location.href = "email.html";
	}, 1000);
});

// -----------------LogIn-function------------------//

document.querySelector("#login").addEventListener("click", () => {
	setInterval(() => {
		window.location.href = "login.html";
	}, 1000);
});

if (window.innerWidth < 1080) {
	let array = document.querySelectorAll(".nav-bottom button");
	array.forEach((element) => {
		// element.style.visibility = "hidden";
	});
}

"use strict";

window.onload = function() {
	let layers = document.getElementsByClassName("parallax__layer");


	let moveLaers = function(e) {
		e = e || event;

		let initialX = (window.innerWidth / 2) - e.pageX,
			initialY = (window.innerHeight / 2) - e.pageY;

		for(let i = 0; i < layers.length; i++) {
			let divider = i / 100,
				X = initialX * divider,
				Y = initialY * divider,
				bottom = (window.innerHeight / 2) * divider,
				transformStyle = "translate3d(" + X + "px, " + Y + "px, " + "0)";

			layers[i].style.transform = transformStyle;
			layers[i].style.bottom = "-" + bottom + "px";
		}
	};


	window.addEventListener("mousemove", moveLaers);
};




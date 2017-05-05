"use strict";

window.onload = function() {
	let parallax = document.getElementById("parallax");


	let moveLaers = function(e) {
		e = e || event;

		let pageX = e.pageX,
			pageY = e.pageY,
			initialX = (window.innerWidth / 2) - pageX,
			initialY = (window.innerHeight / 2) - pageY;
		
		let layer = parallax.lastElementChild,
			stl = layer.style;

		stl.transform = "translate3d(" + initialX + "px, " + initialY + "px, " + "0)";

		//console.log(parallax.lastElementChild);
	};

	
	window.addEventListener("mousemove", moveLaers);
};




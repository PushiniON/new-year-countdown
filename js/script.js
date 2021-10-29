import { init, resizeReset } from './fireworks.js';

var curentYear = new Date().getFullYear();
// var countDownDate = new Date(curentYear.toString(), 11, 31);
// countDownDate.setHours(23, 59, 59);
var countDownDate = new Date(curentYear.toString(), 9, 29);
countDownDate.setHours(23, 52, 59);

var timer = setInterval(counT, 1000);

function counT() {
	var today = new Date();
	var endMonth = new Date();
	endMonth.setMonth(endMonth.getMonth() + 1, 1);
	endMonth.setHours(0, 0, 0);

	var distance = Math.floor(countDownDate.getTime() - today.getTime());

	if (distance < 0) {
		clearInterval(timer);

		var bg = document.getElementById("sfondo");
		bg.classList.remove("body");
		bg.classList.add("sfondo");

		var titleNew = document.getElementById("title");
		titleNew.classList.add("title__new");
		titleNew.innerHTML = "Felice Anno Nuovo!!!";

		document.getElementById("countdown").remove();

		// Animazione fireworks
		init();
		resizeReset();

	} else {
		var daysInMonth = Math.floor(distance / (1000 * 60 * 60 * 24));
		// console.log(daysInMonth);

		if (countDownDate <= endMonth || daysInMonth <= 30) {
			var diff = distance;
		} else {
			var diff = Math.floor((countDownDate.getTime() - today.getTime()) - (countDownDate.getTime() - endMonth.getTime()));
		}

		if (distance > diff) {
			var months = Math.floor(countDownDate.getMonth() - today.getMonth());
		} else {
			var months = 0;
		}

		if (countDownDate > endMonth && daysInMonth > 30 && daysInMonth <= 60) {
			var months = 1;
			var days = daysInMonth - 30;
		} else if (daysInMonth < 30) {
			var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		} else {
			var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		}

		var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((diff % (1000 * 60)) / 1000);

		if (months < 2) {
			document.getElementById("months__text").innerHTML = "mese";
		}

		if (days < 2) {
			document.getElementById("days__text").innerHTML = "giorno";
		}

		function addZero(d) {
			return (d < 10) ? '0' + d : d;
		}
		// if (months < 10) {
		// 	months = '0' + months;
		// }
		document.getElementById("months").innerHTML = addZero(months);
		document.getElementById("days").innerHTML = addZero(days);
		document.getElementById("hours").innerHTML = addZero(hours);
		document.getElementById("minutes").innerHTML = addZero(minutes);
		document.getElementById("seconds").innerHTML = addZero(seconds);
	}
}
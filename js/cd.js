window.onload = init;
function init() {
	var curentYear = new Date().getFullYear();
	var endYear = new SetDate(curentYear, 5, 31, 23, 59, 59);
	countTimer(endYear);
}

function SetDate(year, month, day, hour, minutes, seconds) {
	this.year = year;
	this.month = month;
	this.day = day;
	this.hour = hour;
	this.minutes = minutes;
	this.seconds = seconds;
	this.countDownDate = new Date(this.year, this.month, this.day, this.hour, this.minutes, this.seconds);
}

function countTimer(endCountDownDate) {
	var setTimer = setInterval(countDown, 1000);

	function countDown() {
		var endDate = endCountDownDate.countDownDate;
		var today = new Date();
		var endMonth = new Date();
		endMonth.setMonth(endMonth.getMonth() + 1, 1);
		endMonth.setHours(0, 0, 0);

		// Calcolo la differenza tra giorno di oggi e fine anno in millesecondi
		var distance = Math.floor(endDate - today);


		if (distance < 0) {
			clearInterval(setTimer);

			var background = document.getElementById("sfondo");
			background.classList.remove("body");
			background.classList.add("sfondo");

			var setText = document.getElementById("title");
			setText.classList.add("title__new");
			setText.innerHTML = "Felice Anno Nuovo!!!";

			document.getElementById("countdown").remove();

		} else {
			var months = 0;
			var remainingDaysInMonth = 0;
			var days = 0;
			var hours = 0;
			var minutes = 0;
			var seconds = 0;
			// Calcolo i giorni rimasti fino alla fine del anno
			var daysEndYear = Math.floor(distance / (1000 * 60 * 60 * 24));

			// Calcolo dei giorni (in millesecondi) rimasti fino alla fine del mese
			if (endDate <= endMonth || daysEndYear <= 30) {
				remainingDaysInMonth = distance;
			} else {
				remainingDaysInMonth = Math.floor((endDate - today) - (endDate - endMonth));
			}

			// Controla se c'e piu di un mese fino alla fine del anno e/o calcolo dei mesi rimasti fino alla data impostata come (endCountDownDate)
			if (distance > remainingDaysInMonth) {
				months = Math.floor(endCountDownDate.month - today.getMonth());
			} else {
				months = 0;
			}

			// Calcolo dei giorni rimasti fino alla fine del mese
			if (endDate > endMonth && daysEndYear > 30 && daysEndYear <= 60) {
				months = 1;
				days = daysEndYear - 30;
			} else {
				days = Math.floor(remainingDaysInMonth / (1000 * 60 * 60 * 24));
			}

			hours = Math.floor((remainingDaysInMonth % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((remainingDaysInMonth % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((remainingDaysInMonth % (1000 * 60)) / 1000);

			if (months < 2) {
				document.getElementById("months__text").innerHTML = "mese";
			}

			if (days < 2) {
				document.getElementById("days__text").innerHTML = "giorno";
			}

			function addZero(d) {
				return (d < 10) ? '0' + d : d;
			}

			document.getElementById("months").innerHTML = addZero(months);
			document.getElementById("days").innerHTML = addZero(days);
			document.getElementById("hours").innerHTML = addZero(hours);
			document.getElementById("minutes").innerHTML = addZero(minutes);
			document.getElementById("seconds").innerHTML = addZero(seconds);
		}
	}
}

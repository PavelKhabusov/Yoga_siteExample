function calc() {
	'use strict';
  // ----------------
	// ----- Calculator
	// ----------------
	let persons = document.querySelectorAll('.counter-block-input')[0],
			restDays = document.querySelectorAll('.counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;
			totalValue.innerHTML = 0;

	persons.addEventListener('change', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});
	persons.addEventListener('keypress', function(e) {
		var keycode = (e.keyCode ? e.keyCode : e.which);
    if (/\D/.test(String.fromCharCode(keycode))) { // a non–digit was entered
        e.preventDefault();
    }
  });
	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});
	restDays.addEventListener('keypress', function(e) {
		var keycode = (e.keyCode ? e.keyCode : e.which);
    if (/\D/.test(String.fromCharCode(keycode))) { // a non–digit was entered
        e.preventDefault();
    }
  });
	place.addEventListener('change', function() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
}
export default calc;
window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// ----------
	// ----- Tabs
	// ----------
	let tab = document.querySelectorAll('.info-header-tab'),
			info = document.querySelector('.info-header'),
			tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	
	hideTabContent(1);

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(e) {
		let tar = e.target;

		if(tar && tar.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if(tar == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// -----------
	// ----- Timer
	// -----------
	let deadline = '2019-06-05';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/1000/60/60));
		if(seconds < 10) seconds = '0' + seconds;
		if(minutes < 10) minutes = '0' + minutes;
		if(hours < 10) hours = '0' + hours;
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'),
				timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}
	setClock('timer', deadline);

	// ------------
	// ----- Scroll
	// ------------
	let nav = document.querySelector('.container');
	nav.addEventListener('click', function(e) {
		e.preventDefault();
		if (e.target.tagName == "A") {
			let link = e.target.getAttribute('href'),
					point = document.querySelector(link);
			window.scrollTo({
				top: point.offsetTop - 100,
				behavior: 'smooth'
			});
		}
	});

	// -----------
	// ----- Modal
	// -----------
	let more = document.querySelectorAll('.more, .description-btn'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

	more.forEach(function(item) {
		item.addEventListener('click', function() {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.forEach(function(item) {
			item.classList.remove('more-splash');
		});
		document.body.style.overflow = '';
	});

	// ----------
	// ----- Form
	// ----------
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...' 
	};
	let popupForm = document.querySelector('.main-form'),
			popupInput = popupForm.getElementsByTagName('input'),
			popupStatusMessage = document.createElement('div');
	popupStatusMessage.classList.add('status');

	popupForm.addEventListener('submit', function(e) {
		e.preventDefault();
		popupForm.appendChild(popupStatusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		let popupFormData = new FormData(popupForm);

		let obj = {};
		popupFormData.forEach(function(value, key) {
			obj[key] = value;
		});
		let popupJson = JSON.stringify(obj);

		request.send(popupJson);

		request.addEventListener('readystatechange', function() {
			if(request.readyState < 4) {
				popupStatusMessage.innerHTML = message.loading;
			} else if(request.readyState === 4 && request.status == 200) {
				popupStatusMessage.innerHTML = message.success;
			} else {
				popupStatusMessage.innerHTML = message.failure;
			}
		});

		for(let i = 0; i < popupInput.length; i++) {
			popupInput[i].value = '';
		}
	});
	// Next form
	let tel_mask = document.getElementById("tel_mask"),
			popup_tel_mask = document.getElementById("popup_tel_mask");
	tel_mask.addEventListener('keypress', function() {
    var that = this;
    setTimeout(function() {
        var res = /[^0-9+]/g.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
  }, false);
  popup_tel_mask.addEventListener('keypress', function() {
    var that = this;
    setTimeout(function() {
        var res = /[^0-9+]/g.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
  }, false);

	let form = document.querySelector('#form'),
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

		let formData = new FormData(form);

		let obj = {};
		formData.forEach(function(value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', function() {
			if(request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if(request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});

		for(let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});

	// ----------
	// ----- Form
	// ----------
}); 
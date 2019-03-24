function form() {
	'use strict';
  // ----------
	// ----- Form
	// ----------
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...' 
	};
	let form = document.getElementsByClassName('main-form')[0],
			formBottom = document.getElementById('form'),
			input = document.getElementById('form'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
	function sendForm(elem) {
		elem.addEventListener('submit', function(e) {
			e.preventDefault();
			elem.appendChild(statusMessage);
			let formData = new FormData(elem);

			function postData(data) {
				return new Promise(function(resolve, reject) {
					let request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

					request.onreadystatechange = function() {
						if(request.readyState < 4) {
							resolve()
						} else if(request.readyState === 4) {
							if(request.status == 200)
								resolve()
							} else {
								reject()
							}
					}
					
					request.send(data);
				})
			}
			function clearInput() {
				for(let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}
			postData(formData)
				.then(() => statusMessage.innerHTML = message.loading)
				.then(() => statusMessage.innerHTML = message.success)
				.catch(() => statusMessage.innerHTML = message.failure)
				.then(clearInput)
		});
	}
	sendForm(form);
	sendForm(formBottom);
	
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
}
export default form;
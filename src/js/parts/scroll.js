function scroll() {
	'use strict';
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
}
export default scroll;

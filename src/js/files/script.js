// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { getHash, isMobile } from "./functions.js";
import "./sliderAdaptive.js";
// import { formsModules } from "./forms/forms.js";
let block = document.querySelector(".menu__item");
//document.addEventListener("click", documentActions);
if (getHash()) {
	const nav = getHash();
	const link = document.querySelector(`a[href="${nav}"]`);
	if (link) {
		window.addEventListener("load", function () {
			link.click();
		});
	}
}
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
function createSlides() {
	const sliders = document.querySelectorAll('.slider');
	if (sliders.length > 0) {
		sliders.forEach((slider, i) => {
			const images = document.createElement('div');
			let slides = [];
			let inputs = [];
			let labels = [];
			const links = slider.dataset.slider.replace(/\s{2,}/g, '').split(';', 5);
			links.forEach(link => {
				slides.push(link);
			});
			slides.forEach((slide, index) => {
				const input = document.createElement('input');
				input.type = 'radio';
				input.name = `radio-btn-${i + 1}`;
				input.id = `radio${index + 1}-${i + 1}`;
				inputs.push(input);
				const label = document.createElement('label');
				label.setAttribute('for', `radio${index + 1}-${i + 1}`);
				label.classList.add('navigation-btn');
				labels.push(label);
			});
			inputs.forEach(input => {
				slider.append(input);
			})
			labels.forEach(label => {
				slider.append(label);
			})

			images.classList.add('imgs_slides');
		})
	}
}
const cards = document.querySelectorAll('.card-preview-slider');
if (cards.length > 0) {
	if (isMobile.any()) {
		cards.forEach(card => {
			const slider = card.querySelector('.swiper');
			new Swiper(slider, {
				slidePreview: 1,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					dynamicBullets: true,
				},
			})
		})
	} else {
		document.addEventListener('mouseover', (e) => {
			const target = e.target;
			if (target.classList.contains('card-preview-slider__item')) {
				const parent = target.closest('.card-preview-slider');
				const slides = parent.querySelectorAll('.swiper-slide');
				const lis = parent.querySelectorAll('.card-preview-slider__item');
				lis.forEach((li, i) => {
					if (target === li) {
						li.classList.add('_active');
						slides[i].classList.add('_active');
					} else {
						li.classList.remove('_active');
						slides[i].classList.remove('_active');
					}
				})
			}
		});
		document.addEventListener('click', (e) => {
			const target = e.target;
			if (target.classList.contains('card-preview-slider__item')) {
				const parent = target.closest('.card-preview-slider');
				const href = parent.dataset.href ? parent.dataset.href : 'https://www.google.com/';
				window.location.href = href;
			}
		});
		cards.forEach(card => {
			card.addEventListener('mouseleave', (e) => {
				const parent = e.currentTarget;
				const slides = parent.querySelectorAll('.swiper-slide');
				const lis = parent.querySelectorAll('.card-preview-slider__item');
				lis.forEach((li, i) => {
					if (i === 0) {
						li.classList.add('_active');
						slides[i].classList.add('_active');
					} else {
						li.classList.remove('_active');
						slides[i].classList.remove('_active');
					}
				})
			});
		})
	}
}
//createSlides();
function documentActions(e) {
	let targetElement = e.target;
	let targetPrevItem = targetElement.parentElement;
	let blockOk = document.querySelectorAll(".menu__item._ok");

	if (targetElement.classList.contains("_icon-arrow-down")) {
		targetPrevItem.classList.toggle("_ok");
	}

	if (blockOk.length > 1) {
		_removeClasses(blockOk, "_ok");
	}

	if (!targetElement.closest(".menu__item") && blockOk.length > 0) {
		_removeClasses(blockOk, "_ok");
	}

	if (targetElement.classList.contains("_icon-search")) {
		document
			.querySelector(".header__form")
			.classList.toggle("_search-active");
	} else if (
		!targetElement.closest(".header__form") &&
		document.querySelector(".header__form._search-active")
	) {
		document
			.querySelector(".header__form")
			.classList.remove("_search-active");
	}
	if (targetElement.matches('[id^="card-preview-slide"]') || targetElement.matches('.card-preview-slider__item')) {
		const parent = targetElement.closest('.card-preview-slider');
		window.location.href = parent.dataset.href;
	}
}


//Открытие доп меню на мобильном
// const punctMenu = document.querySelectorAll('.menu__link.drop');
// punctMenu.forEach(element => {
// 	element.addEventListener("click", function (e) {
// 		punctMenu.forEach(el => {
// 			el.previousElementSibling.style.display = "none";
// 		});
// 		e.preventDefault();
// 		element.previousElementSibling.style.display = "block";
// 	});
// });


// //Обрезаем заголовок новости на главной
// const nameNews = document.querySelectorAll('.news__item-title > p');
// nameNews.forEach(element => {

// 	var sliced = element.textContent.slice(0,50);
// 	if (sliced.length < element.textContent.length) {
// 	sliced += '...';
// 	}
// 	element.innerHTML = sliced;
// });


// //Обрезаем заголовок новости на партнерах и кнопка "Развернуть"

// const namePartner = document.querySelectorAll('.partnerspage__item-text');
// namePartner.forEach(element => {

// 	var sliced = element.textContent.slice(0,335);

// 	if (sliced.length < element.textContent.length) {
// 	sliced += '...';
	
// 	const str = "<div class='partnerspage__item-about text-20'><p>Подробнее</p></div>";
// 	const strFirst = "<div class='partnerspage__item-aboutfirst' style='display: none;'>"+ element.textContent + "<div>";
// 	element.insertAdjacentHTML('afterEnd', str);
// 	element.insertAdjacentHTML('afterEnd', strFirst);
// 	}
// 	element.innerHTML = sliced;
// });

// const buttonPartner = document.querySelectorAll('.partnerspage__item-about');

// buttonPartner.forEach(element => {
// 	element.addEventListener('click', e => {
// 		element.previousElementSibling.previousElementSibling.innerHTML = '<div class="dropdown">' + element.previousElementSibling.textContent + "<div class='partnerspage__item-back text-20'>Свернуть</div>" + '</div>';
// 		const buttonPartnerClose = document.querySelectorAll('.partnerspage__item-back');

// 		buttonPartnerClose.forEach(elements => {
// 			elements.addEventListener('click', e => {
// 				var sliced = elements.parentElement.parentElement.textContent.slice(0,335);
// 				sliced += '...';
// 				elements.parentElement.parentElement.innerHTML = sliced;
// 			});
// 		});
// 	});
// });

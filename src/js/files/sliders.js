/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.main__swiper')) {
		new Swiper('.main__left-body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],

			effect: 'fade',
			autoplay: {
				delay: 14000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: '.main-slider__bullets',
				clickable: true,
				renderBullet: function (index) {
					index+=1;
					return `<span class="swiper-pagination-bullet text-20">0${index}</span>`;
				
			 },
				
			},
			// Arrows
			navigation: {
				nextEl: '.main-slider__arrows .main-slider__arrow-next',
				prevEl: '.main-slider__arrows .main-slider__arrow-prev',
			},
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {

			}
		});
	}

	if (document.querySelector('.matches__swiper')) {
		new Swiper('.matches__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			//Arrows
			navigation: {
				nextEl: '.matches-slider__arrows .matches-slider__arrow-next',
				prevEl: '.matches-slider__arrows .matches-slider__arrow-prev',
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				668: {
					slidesPerView: 2,
					spaceBetween: 10,
					slidesPerGroup: 1,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				1450: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},

			on: {

			}
		});
	}

	if (document.querySelector('.players__swiper')) {
		new Swiper('.players__body', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3.8,
			slidesPerGroup: 2,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			lazy: true,
			// Dotts
			//Arrows
			navigation: {
				nextEl: '.players-slider__arrows .players-slider__arrow-next',
				prevEl: '.players-slider__arrows .players-slider__arrow-prev',
			},

			breakpoints: {
				0: {
					slidesPerView: 1.1,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				400: {
					slidesPerView: 1.5,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				568: {
					slidesPerView: 2.5,
					spaceBetween: 10,
					slidesPerGroup: 1,
				},
				992: {
					slidesPerView: 3.1,
					spaceBetween: 20,
					slidesPerGroup: 1,
				},
				1450: {
					slidesPerView: 3.8,
					spaceBetween: 30,
				},
			},

			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
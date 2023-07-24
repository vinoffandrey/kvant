//Обрезаем заголовок новости на главной
const nameNews = document.querySelectorAll('.news__item-title > p');
nameNews.forEach(element => {

	var sliced = element.textContent.slice(0,50);
	if (sliced.length < element.textContent.length) {
	sliced += '...';
	}
	element.innerHTML = sliced;
});


//Обрезаем заголовок новости на партнерах и кнопка "Развернуть"

const namePartner = document.querySelectorAll('.partnerspage__item-text');
namePartner.forEach(element => {

	var sliced = element.textContent.slice(0,335);

	if (sliced.length < element.textContent.length) {
	sliced += '...';
	
	const str = "<div class='partnerspage__item-about text-20'><p>Подробнее</p></div>";
	const strFirst = "<div class='partnerspage__item-aboutfirst' style='display: none;'>"+ element.textContent + "<div>";
	element.insertAdjacentHTML('afterEnd', str);
	element.insertAdjacentHTML('afterEnd', strFirst);
	}
	element.innerHTML = sliced;
});

const buttonPartner = document.querySelectorAll('.partnerspage__item-about');

buttonPartner.forEach(element => {
	element.addEventListener('click', e => {
		element.previousElementSibling.previousElementSibling.innerHTML = '<div>' + element.previousElementSibling.textContent + "<div class='partnerspage__item-back text-20'>Свернуть</div>" + '</div>';
		const buttonPartnerClose = document.querySelectorAll('.partnerspage__item-back');

		buttonPartnerClose.forEach(elements => {
			elements.addEventListener('click', e => {
				var sliced = elements.parentElement.parentElement.textContent.slice(0,335);
				sliced += '...';
				elements.parentElement.parentElement.innerHTML = sliced;
			});
		});
	});
});

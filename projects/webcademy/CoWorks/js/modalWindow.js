// ищем кнопки для открытия модального окна по атрибуту data-action="modal"
const opeModalBtns = document.querySelectorAll('[data-action="modal"]')
// ищем главное окно модалки
const modal = document.querySelector('.modal');
// находим кнопку закрытия окна модалки, ищем по id
const closeModalBtn = document.querySelector('#closeModal');
const modalBody = document.querySelector('.modal__body');

/** работаем над открытием модального окна */
opeModalBtns.forEach(function (item) {
    item.addEventListener('click', function () {
        // открываем модалку добавляя к ней класс modal--open
        modal.classList.add('modal--open');
        // чтобы страница не крутилась во время открытия модалки
        document.body.classList.add('no-scroll');
    });
});

/** работаем над закрытием модального окна */
closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
});

/** Закрытие модалки по поле затемнению */
modal.addEventListener('click', function () {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
});

/** Отключаем поднятие клика чтобы при нажатии внутри модалки она не закрывалась */
modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});

/** Закрываем модалку по кнопке ESC */
document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') {
        modal.classList.remove('modal--open');
        document.body.classList.remove('no-scroll');
    }
});
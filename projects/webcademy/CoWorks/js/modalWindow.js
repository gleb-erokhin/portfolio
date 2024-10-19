// ищем кнопки для открытия модального окна по атрибуту data-action="modal"
const opeModalBtns = document.querySelectorAll('[data-action="modal"]')
// ищем главное окно модалки
const modal = document.querySelector('.modal');
// находим кнопку закрытия окна модалки, ищем по id
const closeModalBtn = document.querySelector('#closeModal');
const modalBody = document.querySelector('.modal__body');

/** Функции */
function closeModal() {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
}

function escCloseBtn(event) {
    if (event.key == 'Escape') {
        closeModal();
    }
}

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
// так как вызываем функцию closeModal, и больше в ней параметров нет, заменим ее сразу вместо function(){}, но без ()
closeModalBtn.addEventListener('click', closeModal);

/** Закрытие модалки по поле затемнению */
modal.addEventListener('click', closeModal);

/** Отключаем поднятие клика чтобы при нажатии внутри модалки она не закрывалась */
modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});

/** Закрываем модалку по кнопке ESC */
document.addEventListener('keydown', escCloseBtn);
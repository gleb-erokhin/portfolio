// ищем кнопку
const btn = document.querySelector('#btn-mobile-nav');
// ищем картинку бургер меню
const mobileBtnImg = document.querySelector('#mobile-nav-img');
const mobileNav = document.querySelector('#mobile-nav');
const header = document.querySelector('#header');

// Добавляем событие клика
btn.addEventListener('click', function(){
    // при нажатии на кнопку добавляем/убираем класс open
    btn.classList.toggle('open');
    // после добавления класса open включается мобильная навигация
    mobileNav.classList.toggle('open');
    // при включении мобильного меню добавляем белый фон шапки
    header.classList.toggle('header-white-bg');
    // отключаем скрол шапки в мобильной навигации добавление доп. класса
    document.body.classList.toggle('no-scroll');

    // проверяем если класс open есть у кнопки = меняем картинку,
    if (btn.classList.contains('open')) {
        mobileBtnImg.src = `./img/icons/close-mobile-nav.svg`
    // в обратном порядке меняем картинку обратно
    } else {
        mobileBtnImg.src = `./img/icons/open-mobile-nav.svg`
    }
})
// ищем кнопку
const btn = document.querySelector('#btn-mobile-nav');
const mobileBtnImg = document.querySelector('#mobile-nav-img');

// Добавляем событие клика
btn.addEventListener('click', function(){
    // при нажатии на кнопку добавляем/убираем класс open
    btn.classList.toggle('open');
    // проверяем если класс open есть у кнопки = меняем картинку,
    if (btn.classList.contains('open')) {
        mobileBtnImg.src = `./img/icons/close-mobile-nav.svg`
    // в обратном порядке меняем картинку обратно
    } else {
        mobileBtnImg.src = `./img/icons/open-mobile-nav.svg`
    }
})
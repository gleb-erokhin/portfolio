// мобильная навигация 
// ищем кнопку открытия мобильной навигации по id
const openMobileNavBtn = document.querySelector('#openMobileNavBtn');
const closeMobileNavBtn = document.querySelector('#closeMobileNavBtn');
const mobileNav = document.querySelector('#mobileNav');

// ищем ссылки в мобильной навигации внутри mobileNav
const mobileNavLinks = mobileNav.querySelectorAll('a, button');
console.log(mobileNavLinks);

// открываем мобильную навигацию
openMobileNavBtn.addEventListener('click', function () {
    mobileNav.classList.add('mobile-nav--open');
    // чтобы во время мобильной навигации небыло скрола добавляем класс no-scroll в base.scss прописан
    document.body.classList.add('no-scroll');
});

// закрываем мобильную навигацию
closeMobileNavBtn.addEventListener('click', function () {
    mobileNav.classList.remove('mobile-nav--open');
    document.body.classList.remove('no-scroll');
});

// обходим коллекцию и получаем элементы для закрытия мобильной навигации
mobileNavLinks.forEach(function(item) {
    // для каждого элемента выбираем закрытие после нажатия на элемент
    item.addEventListener('click', function() {
        mobileNav.classList.remove('mobile-nav--open');
        document.body.classList.remove('no-scroll');
    })
});
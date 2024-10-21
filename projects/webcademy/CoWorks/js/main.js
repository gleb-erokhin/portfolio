/** Tiny slider */
// подключаем слайдер

const slider = tns({
    container: '.slider',

    items: 2.7,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    loop: true,
    
    autoWidth: true,
    lazyload: true,
    swipeAngel: false,

    // кастомные элементы управления слайдером
    controlsContainer: '.locations__controls',
    nav: false
});

// ищем кнопки слайдеро в мобильной версии страницы, ищу внутри блока элемент с классом prev  next
const prevBtn = document.querySelector('.locations__controls--mobile .prev');
const nextBtn = document.querySelector('.locations__controls--mobile .next');

// обращаемся к кнопкам и вешаем на событие кнопки действие
prevBtn.addEventListener('click', function() {
    // используем свойства самого слайдера goTo
    slider.goTo('prev');
});

// сокращенная форма записи, в виду того что мы имеем одну строыку кода
nextBtn.onclick = () => slider.goTo('next');
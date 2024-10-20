/** Tiny slider */
// подключаем слайдер

const slider = tns({
    container: '.slider',
    items: 3,
    slideBy: 'page',
    mouseDrag: true,
    gutter: 10,
    autoplay: false,

    // кастомные элементы управления слайдером
    controlsContainer: '.locations__controls',
    nav: false
});
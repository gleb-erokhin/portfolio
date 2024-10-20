/** Tiny slider */
// подключаем слайдер

const slider = tns({
    container: '.slider',
    items: 3,
    slideBy: 'page',
    mouseDrag: true,
    gutter: 20,
    autoplay: true
});
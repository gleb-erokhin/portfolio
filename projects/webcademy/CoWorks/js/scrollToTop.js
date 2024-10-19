//находим кнопку прокрутка к верху страницы по ID
const scrollTopBtn = document.querySelector('#scrollToTopBtn');

// слушаем событие скрола на странице
window.addEventListener('scroll', function() {
    // если прокрутили страницу больеше чем высота экрана
    // console.log('window.scrollY', window.scrollY);
    // console.log('window.innerHeight', window.innerHeight);
    if (window.scrollY > (window.innerHeight - 400)) {
        scrollTopBtn.classList.add('top-link--visible');
    } else {
        scrollTopBtn.classList.remove('top-link--visible');
    }
})

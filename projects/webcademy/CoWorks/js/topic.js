// ищем все топики
const topics = document.querySelectorAll('.topic');
const topicBtns = document.querySelectorAll('.topic__btn');

//обходим блоки аккордиона
topics.forEach(function (topic) {
    // прослушиваем клик по каждому топику
    topic.addEventListener('click', function (event) {
        //ищем ближайшего родителя, интересует тег topic_btn
        if (event.target.closest('.topic__btn')) {
            // переключатель для того чтобы удалять и добавлять класс, дополнительно получаем переменную с true / false для того чтобы на основании этого менять картинку. 
            const isOpen = topic.classList.toggle('topic--open');

            // для плавного открытия аккордиона надо определить высоту открытия, а значит надо найти именно блок topic__content
            const topicContent = topic.querySelector('.topic__content');

            // ищем изображение внутри топика, для того чтобы его сменить
            const img = topic.querySelector('.topic__icon');

            // проверяем состояние счетчика переключателя, подставляем картинки
            if (isOpen) {
                img.src = './img/icons/btn-minus.svg';
                // обращаемся к свойству CSS и меняем высоту отображения, для того чтобы высоту всегда занать точно используем динамическое значение через scrollHeight, а так как это просто число прибавляем пиксели
                topicContent.style.maxHeight = topicContent.scrollHeight + 'px';
            } else {
                img.src = './img/icons/btn-plus.svg'
                topicContent.style.maxHeight = '0px';

            }
        }
    })
})
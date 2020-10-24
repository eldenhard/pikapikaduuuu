// Создаем переменнуююв которую кладем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// создаем переменную в которую кладем меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    // отменяем стандратное поведение ссфлки
    event.preventDefault();
    // вешаем класс на меню когда кликнули по кнопке меню
    menu.classList.toggle('visible');
})
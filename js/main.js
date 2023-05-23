let menuBtn = document.querySelector('.menu__btn-mobile');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
})
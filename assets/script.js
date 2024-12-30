$(".about__btn").click(function(){
    $(".option").toggle('show')
})

$(".header__burger").click(function(){
  $(".close-menu").toggle('show')
})

$(".menu__close").click(function(){
  $(".close-menu").toggle('option')
})

$(".menu__item-title-category").click(function(){
  $(".menu__main").toggle('option')
  $(".menu__category").toggle('show')
})

$(".menu__category-nav").click(function(){
  $(".menu__main").toggle('show')
  $(".menu__category").toggle('option')
})

$(".menu__item-title-featured").click(function(){
  $(".menu__main").toggle('option')
  $(".menu__featured").toggle('show')
})

$(".menu__featured-nav").click(function(){
  $(".menu__main").toggle('show')
  $(".menu__featured").toggle('option')
})

$(".menu__item-title-material").click(function(){
  $(".menu__main").toggle('option')
  $(".menu__material").toggle('show')
})

$(".menu__material-nav").click(function(){
  $(".menu__main").toggle('show')
  $(".menu__material").toggle('option')
})

const dropdownTrigger = document.querySelector('.header__item-dropdown'); // Кнопка Shop
const dropdownMenu = document.querySelector('.header__dropdown'); // Выпадающее меню

let hideTimeout;

dropdownTrigger.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); // Убираем таймер, если он активен
  dropdownMenu.classList.add('show'); // Показываем меню
});

dropdownTrigger.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    dropdownMenu.classList.remove('show'); // Прячем меню после задержки
  }, 300); // Задержка 300 мс
});

dropdownMenu.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); // Убираем таймер при наведении на меню
});

dropdownMenu.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    dropdownMenu.classList.remove('show'); // Прячем меню после задержки
  }, 300); // Задержка 300 мс
});

// Показ и закрытие блока с текстом

$(".about__btn").click(function(){
    $(".option").toggle('show')
})

// Закрытие и показ бокового меню в мобильной версии

$(".header__burger").click(function(){
  $(".close-menu").toggle('show')
})

$(".menu__close").click(function(){
  $(".close-menu").toggle('option')
})

// Переход к категориям в мобильной версии меню

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

// Показ и закрытие меню фильтров

$(".shop__nav-settings").click(function(){
  $(".shop__filters-box ").toggle('show')
})

$(".shop__filters-close").click(function(){
  $(".shop__filters-box ").toggle('option')
})

// Выпадающее меню на главной странице

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

// Скрытие и показ фильтров на странице категорий 

document.querySelectorAll('.filter__title').forEach((title) => {
  title.addEventListener('click', function () {
    const list = this.nextElementSibling; // Следующий элемент (список фильтров)
    if (list && list.classList.contains('filter__list')) {
      list.style.display = list.style.display === 'none' ? 'flex' : 'none';
    }
  });
});

document.querySelectorAll('.filter__title').forEach((title) => {
  title.addEventListener('click', function () {
    const img = this.querySelector('.filter__title-img'); // Ищем картинку внутри заголовка
    if (img) {
      img.style.transform = img.style.transform === 'rotate(180deg)' ? 'rotate(0)' : 'rotate(180deg)';
    }
  });
});

// Счетчик на сайты товара

document.addEventListener("DOMContentLoaded", () => {
  const decrementBtn = document.querySelector(".product__counter__btn--decrement");
  const incrementBtn = document.querySelector(".product__counter__btn--increment");
  const counterValue = document.querySelector(".product__counter__value");

  decrementBtn.addEventListener("click", () => {
    const currentValue = parseInt(counterValue.textContent, 10);
    if (currentValue > 0) { // Значение не должно быть отрицательным
      counterValue.textContent = currentValue - 1;
    }
  });

  incrementBtn.addEventListener("click", () => {
    const currentValue = parseInt(counterValue.textContent, 10);
    counterValue.textContent = currentValue + 1;
  });
});

// Выбор цвета продукта 

const colorItems = document.querySelectorAll('.product__color-variable-item');

// Добавляем обработчик события "click" на каждый элемент
colorItems.forEach(item => {
    item.addEventListener('click', () => {
        // Убираем класс product__color-variable-item-active со всех элементов
        colorItems.forEach(el => el.classList.remove('product__color-variable-item-active'));
        
        // Добавляем класс product__color-variable-item-active на кликнутый элемент
        item.classList.add('product__color-variable-item-active');
    });
});

// Выбор размера продукта 

const sizeItems = document.querySelectorAll('.product__size-variable-item');

// Добавляем обработчик события "click" для каждого элемента
sizeItems.forEach(item => {
    item.addEventListener('click', () => {
        // Удаляем класс product__size-variable-item-active у всех элементов
        sizeItems.forEach(el => el.classList.remove('product__size-variable-item-active'));
        
        // Добавляем класс product__size-variable-item-active к кликнутому элементу
        item.classList.add('product__size-variable-item-active');
    });
});


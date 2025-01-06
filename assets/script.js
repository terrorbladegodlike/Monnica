// Показ и закрытие блока с текстом

$(".about__btn").click(function(){
    $(".option").toggle('show')
})

// Закрытие и показ бокового меню в мобильной версии

$(".header__burger").click(function () {
  $(".close-menu").toggleClass('show'); 
  $(".overlay").toggleClass('active'); 
});

$(".menu__close").click(function () {
  $(".close-menu").toggleClass('show'); 
  $(".overlay").toggleClass('active'); 
});


$(".overlay").click(function () {
  $(".close-menu").removeClass('show'); 
  $(this).removeClass('active'); 
});


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

$(".shop__nav-settings").click(function () {
  $(".shop__filters-box").toggleClass("show"); 
  $(".overlay").toggleClass("active"); 
});


$(".shop__filters-close").click(function () {
  $(".shop__filters-box").removeClass("show"); 
  $(".overlay").removeClass("active"); 
});

$(".overlay").click(function () {
  $(".shop__filters-box").removeClass("show"); 
  $(".close-menu").removeClass("show"); 
  $(this).removeClass("active"); 
});

// Выпадающее меню на главной странице

const dropdownTrigger = document.querySelector('.header__item-dropdown'); 
const dropdownMenu = document.querySelector('.header__dropdown');

let hideTimeout;

dropdownTrigger.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); 
  dropdownMenu.classList.add('show'); 
});

dropdownTrigger.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    dropdownMenu.classList.remove('show'); 
  }, 300); 
});

dropdownMenu.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout); 
});

dropdownMenu.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    dropdownMenu.classList.remove('show'); 
  }, 300);
});

// Скрытие и показ фильтров на странице категорий 

document.querySelectorAll('.filter__title').forEach((title) => {
  title.addEventListener('click', function () {
    const list = this.nextElementSibling; 
    if (list && list.classList.contains('filter__list')) {
      list.style.display = list.style.display === 'none' ? 'flex' : 'none';
    }
  });
});

document.querySelectorAll('.filter__title').forEach((title) => {
  title.addEventListener('click', function () {
    const img = this.querySelector('.filter__title-img'); 
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
    if (currentValue > 0) { 
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

colorItems.forEach(item => {
    item.addEventListener('click', () => {
        colorItems.forEach(el => el.classList.remove('product__color-variable-item-active'));
        
        item.classList.add('product__color-variable-item-active');
    });
});

// Выбор размера продукта 

const sizeItems = document.querySelectorAll('.product__size-variable-item');

sizeItems.forEach(item => {
    item.addEventListener('click', () => {
        
        sizeItems.forEach(el => el.classList.remove('product__size-variable-item-active'));
        
       
        item.classList.add('product__size-variable-item-active');
    });
});

// Показ определенного блок в product.html

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.product__info-nav-item');
  const infoBlocks = document.querySelectorAll('.product__info-description, .product__info-size, .product__info-delivery');

  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {

      navItems.forEach(nav => nav.classList.remove('product__info-nav-item-active'));


      item.classList.add('product__info-nav-item-active');


      infoBlocks.forEach(block => block.style.display = 'none');


      if (index === 0) {
        document.querySelector('.product__info-description').style.display = 'block';
      } else if (index === 1) {
        document.querySelector('.product__info-size').style.display = 'block';
      } else if (index === 2) {
        document.querySelector('.product__info-delivery').style.display = 'block';
      }
    });
  });


  document.querySelector('.product__info-description').style.display = 'block';
});


// Модальное окно
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('photoModal');
  const modalContent = modal.querySelector('.modal__body');
  const modalClose = modal.querySelector('.modal__close');
  const productPhoto = document.querySelector('.product__photo');


  productPhoto.addEventListener('click', () => {
    modalContent.innerHTML = productPhoto.outerHTML; 
    modal.classList.add('modal--visible'); 
  });


  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--visible'); 
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('modal--visible');
    }
  });
});

// Для блока Help - появление блоков при нажатии

$(document).ready(function () {
  $(".help__faqs-box-title-box").on("click", function () {
    $(this).toggleClass("help__faqs-box-title-box-active"); 
    $(this).next(".help__faqs-box-text").slideToggle(300); 
  });
});

// Для поля поиска

$(document).ready(function () {
  $(".header__options-link, .header__mob-search").on("click", function (event) {
    event.preventDefault();
    $(".header__search").addClass("header__search-active"); 
  });

  $(".header__search-btn").on("click", function () {
    $(".header__search").removeClass("header__search-active"); 
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".header__search, .header__options-link, .header__mob-search").length
    ) {
      $(".header__search").removeClass("header__search-active"); 
    }
  });
});
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

$(".menu__item-category").click(function(){
  $(".menu__main").toggle('option')
  $(".menu__category").toggle('show')
})

$(".menu__category-nav").click(function(){
  $(".menu__main").toggle('show')
  $(".menu__category").toggle('option')
})

$(".menu__item-featured").click(function(){
  $(".menu__main").toggle('option')
  $(".menu__featured").toggle('show')
})

$(".menu__featured-nav").click(function(){
  $(".menu__main").toggle('show')
  $(".menu__featured").toggle('option')
})

$(".menu__item-material").click(function(){
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

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".header__search, .header__options-link, .header__mob-search").length
    ) {
      $(".header__search").removeClass("header__search-active"); 
    }
  });
});

// Ждём, пока DOM загрузится
document.addEventListener("DOMContentLoaded", () => {
  // Получаем ссылки на элементы
  const searchInput = document.getElementById("searchInput"); // Поле ввода
  const searchButton = document.getElementById("searchButton"); // Кнопка поиска
  const products = document.querySelectorAll(".shop__product"); // Все продукты на странице
  const categoryBlock = document.querySelector(".shop__category"); // Блок shop__category
  const searchResultBlock = document.querySelector(".shop__search-result"); // Блок для отображения результатов поиска
  const pagesInner = document.querySelector(".shop__pages-inner"); // Контейнер для навигации

  // Обработчик клика по кнопке поиска
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase(); // Получаем текст из поля ввода

    // Скрываем блок категории
    categoryBlock.classList.add("hidden");

    // Делаем блок результатов поиска видимым
    searchResultBlock.style.display = "block";

    // Если поле пустое, показываем все элементы, скрываем блок результатов и сбрасываем навигацию
    if (query === "") {
      products.forEach(product => product.classList.remove("hidden"));
      categoryBlock.classList.remove("hidden"); // Показываем блок категорий
      searchResultBlock.style.display = "none"; // Скрываем блок результатов поиска
      resetPagesNavigation(); // Сбрасываем навигацию
      return;
    }

    // Проверяем, если введённое значение "ring", скрываем всё, что не имеет класс "ring"
    products.forEach(product => {
      if (product.classList.contains(query)) {
        product.classList.remove("hidden"); // Показываем продукт, если класс совпадает
      } else {
        product.classList.add("hidden"); // Скрываем продукт, если класс не совпадает
      }
    });

    // Обновляем навигацию
    updatePagesNavigation(query);
  });

  // Функция для обновления навигации
  function updatePagesNavigation(query) {
    // Проверяем, есть ли уже ссылка с текстом "SEARCH - <query>"
    const existingSearchLink = pagesInner.querySelector(
      `.shop__pages-item-active[href="#!"]`
    );

    if (!existingSearchLink) {
      // Удаляем класс shop__pages-item-active у ссылки "Shop"
      const shopLink = pagesInner.querySelector(".shop__pages-item-active");
      if (shopLink) shopLink.classList.remove("shop__pages-item-active");

      // Добавляем новый элемент: "SEARCH - RING"
      const newSlash = document.createElement("div");
      newSlash.className = "shop__pages-slash";
      newSlash.textContent = "/";

      const newLink = document.createElement("a");
      newLink.href = "#!";
      newLink.className = "shop__pages-item shop__pages-item-active";
      newLink.textContent = `SEARCH - ${query.toUpperCase()}`;

      // Добавляем новые элементы в DOM
      pagesInner.appendChild(newSlash);
      pagesInner.appendChild(newLink);
    }
  }

  // Функция для сброса навигации
  function resetPagesNavigation() {
    // Удаляем все дополнительные элементы навигации, кроме "Home" и "Shop"
    const additionalElements = pagesInner.querySelectorAll(
      ".shop__pages-slash:not(:first-child), .shop__pages-item:not(:first-child):not([href='./shop.html'])"
    );
    additionalElements.forEach(element => element.remove());

    // Восстанавливаем класс shop__pages-item-active для "Shop"
    const shopLink = pagesInner.querySelector("[href='./shop.html']");
    if (shopLink) shopLink.classList.add("shop__pages-item-active");
  }
});

searchInput.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});
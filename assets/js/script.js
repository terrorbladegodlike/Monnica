// Клик на сердце

$(document).ready(function () {
  // Обработчик клика на .arrivals__like
  $(".arrivals__like").click(function () {
      const likeAdd = $(this).siblings(".arrivals__like-add");

      // Переключение видимости
      if (likeAdd.css("display") === "none") {
          likeAdd.css("display", "block");
      } else {
          likeAdd.css("display", "none");
      }
  });

  // Обработчик клика на .arrivals__like-add
  $(".arrivals__like-add").click(function () {
      $(this).css("display", "none");
  });

  // Обработчик клика на .sale__like
  $(".sale__like").click(function () {
      const likeAdd = $(this).siblings(".sale__like-add");

      // Переключение видимости
      if (likeAdd.css("display") === "none") {
          likeAdd.css("display", "block");
      } else {
          likeAdd.css("display", "none");
      }
  });

  // Обработчик клика на .sale__like-add
  $(".sale__like-add").click(function () {
      $(this).css("display", "none");
  });
});


// Активный item в навигации

$(document).ready(function () {
  // Проверяем текущий URL и устанавливаем активный элемент
  $(".header__link").each(function () {
      if (this.href === window.location.href) {
          $(this).addClass("header__link-active");
      }
  });

  // Добавляем обработчик клика
  $(".header__link").click(function (e) {
      $(".header__link").removeClass("header__link-active");
      $(this).addClass("header__link-active");
  });
});


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
  document.addEventListener("click", (event) => {
    // Проверяем, на какую кнопку кликнули
    if (event.target.classList.contains("product__counter__btn--decrement")) {
      const counterContainer = event.target.closest(".product__counter");
      const counterValue = counterContainer.querySelector(".product__counter__value");
      const currentValue = parseInt(counterValue.textContent, 10);
      if (currentValue > 0) {
        counterValue.textContent = currentValue - 1;
      }
    }

    if (event.target.classList.contains("product__counter__btn--increment")) {
      const counterContainer = event.target.closest(".product__counter");
      const counterValue = counterContainer.querySelector(".product__counter__value");
      const currentValue = parseInt(counterValue.textContent, 10);
      counterValue.textContent = currentValue + 1;
    }
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

// Увеличение изображения при клике

$(document).ready(function () {
  const $modal = $("#photoModal");
  const $modalContent = $modal.find(".modal__body");
  const $modalClose = $modal.find(".modal__close");

  // Открытие модального окна
  $(".product__photo").on("click", function () {
    // Вставляем содержимое в модальное окно
    $modalContent.html($(this).html());
    $modal.show();

    // Обработчик зума для основного изображения
    const $modalImage = $modalContent.find(".product__photo-main");
    let isZoomed = false;

    $modalImage.on("click", function () {
      if (!isZoomed) {
        // Увеличение изображения
        $(this).css({
          transform: "scale(2)", // Зум
          transformOrigin: "center", // Центр зума
          transition: "transform 0.3s ease", // Плавный зум
          cursor: "zoom-out",
        });
        isZoomed = true;
      } else {
        // Сброс зума
        $(this).css({
          transform: "scale(1)", // Сброс масштаба
          cursor: "zoom-in",
        });
        isZoomed = false;
      }
    });
  });

  // Закрытие модального окна
  $modalClose.on("click", function () {
    $modal.hide();
    $modalContent.empty(); // Удаляем содержимое модального окна
  });

  // Закрытие модального окна при клике на фон
  $modal.on("click", function (e) {
    if ($(e.target).is($modal)) {
      $modal.hide();
      $modalContent.empty(); // Удаляем содержимое модального окна
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
  $(".header__options-link-search, .header__mob-search").on("click", function (event) {
    event.preventDefault();
    $(".header__search").addClass("header__search-active"); 
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".header__search, .header__options-link-search, .header__mob-search").length
    ) {
      $(".header__search").removeClass("header__search-active"); 
    }
  });
});

// Вывод нужных товаров при вводе в поле поиска

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

// поиск при нажатии кнопки Enter

searchInput.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Получаем ссылки на элементы
  const forgotPasswordLink = document.querySelector(".log__forgot");
  const loginForm = document.querySelector(".log__form");
  const resetPasswordForm = document.querySelector(".log__form-reset-password");

  // Проверяем существование всех элементов
  if (!forgotPasswordLink || !loginForm || !resetPasswordForm) {
    console.error("Один или несколько элементов не найдены!");
    return;
  }

  // Добавляем обработчик события на клик
  forgotPasswordLink.addEventListener("click", () => {
    // Добавляем класс 'option' для формы входа
    loginForm.classList.add("option");

    // Добавляем класс 'show' для формы сброса пароля
    resetPasswordForm.classList.add("show");
  });
});

// My Account

document.addEventListener("DOMContentLoaded", () => {
  // Получаем все элементы с классом account__sidebar-item
  const sidebarItems = document.querySelectorAll(".account__sidebar-item");

  // Добавляем обработчик события для каждого элемента
  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      // Удаляем класс 'account__sidebar-item-active' у всех элементов
      sidebarItems.forEach(el => el.classList.remove("account__sidebar-item-active"));

      // Добавляем класс 'account__sidebar-item-active' к текущему элементу
      item.classList.add("account__sidebar-item-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Получаем все элементы с классом account__item
  const accountItems = document.querySelectorAll(".account__item");

  accountItems.forEach(item => {
    const changeButton = item.querySelector(".account__item-change"); // Кнопка редактирования
    const saveButton = item.querySelector(".account__item-btn"); // Кнопка сохранения
    const itemBox = item.querySelector(".account__item-box"); // Блок с текстом
    const itemForm = item.querySelector(".account__item-form"); // Блок с формой

    // Проверяем, что все элементы существуют
    if (changeButton && saveButton && itemBox && itemForm) {
      // Обработчик для кнопки редактирования
      changeButton.addEventListener("click", () => {
        itemBox.style.display = "none"; // Скрываем блок с текстом
        itemForm.style.display = "flex"; // Показываем форму
      });

      // Обработчик для кнопки сохранения
      saveButton.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем отправку формы

        itemForm.style.display = "none"; // Скрываем форму
        itemBox.style.display = "flex"; // Показываем блок с текстом

        // Обновляем текст в блоке с текстом
        const input = item.querySelector(".account__item-input");
        const text = item.querySelector(".account__item-text");
        if (input && text) {
          text.textContent = input.value; // Устанавливаем новое значение
        }
      });
    }
  });
});

// Переключение блоков на странице "My-Account"

$(document).ready(function () {
  // Изначально показываем первый блок контента, скрываем остальные
  $(".account__content, .account__payment, .account__order, .account__favorite, .account__password").hide();
  $(".account__content").show();

  // Добавляем обработчик кликов для пунктов меню
  $(".account__sidebar-item").click(function () {
      // Удаляем активный класс у всех пунктов меню
      $(".account__sidebar-item").removeClass("account__sidebar-item-active");

      // Добавляем активный класс к текущему пункту меню
      $(this).addClass("account__sidebar-item-active");

      // Определяем индекс выбранного пункта меню
      const index = $(".account__sidebar-item").index(this);

      // Скрываем все блоки контента
      $(".account__content, .account__payment, .account__order, .account__favorite, .account__password").hide();

      // Показываем блок контента, соответствующий выбранному пункту меню
      $(".account__content, .account__payment, .account__order, .account__favorite, .account__password").eq(index).show();
  });
});

$(document).ready(function () {
  // Добавляем обработчик клика для элемента с текстом "Log out"
  $(".account__sidebar-item").each(function () {
      const title = $(this).find(".account__sidebar-title").text().trim();
      if (title === "Log out") {
          $(this).click(function () {
              window.location.href = "index.html";
          });
      }
  });
});


const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  breakpoints: {
    250: {
      slidesPerView: 2,
    },
    475: {
      slidesPerView: 3,
    },
    713: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});


const swiperMain = new Swiper('.swiper-main', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    120: {
      slidesPerView: 2,
    },
    713: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 5,
    },
  },
  // Navigation arrows
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});

const swiperSelling = new Swiper('.swiper-selling', {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    120: {
      slidesPerView: 2,
    },
    713: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 5,
    },
  },
  // Navigation arrows
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});

const swiperReviews = new Swiper('.swiper-reviews', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    120: {
      slidesPerView: 2,
    },
    713: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 4,
    },
  },
  // Navigation arrows
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});

const swiperTeam = new Swiper('.swiper-team', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    120: {
      slidesPerView: 2,
    },
    713: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 4,
    },
  },
  // Navigation arrows
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});
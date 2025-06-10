// burger
document.addEventListener('DOMContentLoaded', function () {
  const burgerIcon = document.querySelector('.burger-icon');
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';

  // Копируем навигацию
  const navList = document.querySelector('.nav-list').cloneNode(true);
  const headerButton = document.querySelector('.header-button').cloneNode(true);

  mobileMenu.appendChild(navList);
  mobileMenu.appendChild(headerButton);
  document.body.appendChild(mobileMenu);

  // Обработчик клика по бургеру
  burgerIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Закрытие меню
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.burger-menu')) {
      burgerIcon.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });

  // Закрытие при клике на ссылки
  mobileMenu.querySelectorAll('.nav-link, .header-button').forEach(item => {
    item.addEventListener('click', () => {
      burgerIcon.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
});
// hero-swiper
var swiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 50000000,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
})
// reviews-swiper
var swiper = new Swiper(".reviews-swiper", {
  slidesPerView: 4,
  spaceBetween: 18,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    520: {
      slidesPerView: 2.25,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    900: {
      slidesPerView: 3.2,
      spaceBetween: 20,

    },
    // when window width is >= 640px
    1320: {
      slidesPerView: 4,
    }
  }
});
// photo-swiper
var swiper = new Swiper(".photo-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
// error
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.form-inputs');
  const errorMessage = document.querySelector('.error-message');

  // Валидация при потере фокуса
  input.addEventListener('blur', () => {
      if (!input.value.trim()) {
          input.classList.add('error');
          errorMessage.classList.add('show');
      }
  });

  // Сброс ошибки при вводе
  input.addEventListener('input', () => {
      if (input.value.trim()) {
          input.classList.remove('error');
          errorMessage.classList.remove('show');
      }
  });
});
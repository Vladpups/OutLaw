// Обработка отправки форм
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Здесь можно добавить отправку данных на сервер
        alert('Ваше сообщение отправлено!');
        form.reset();
    });
});

// Модальное окно для изображений
const modal = document.createElement('div');
modal.id = "myModal";
modal.classList.add('modal');

const modalContent = document.createElement('img');
modalContent.classList.add('modal-content');
modalContent.id = "modalImg";

const captionText = document.createElement('div');
captionText.id = "caption";

const closeSpan = document.createElement('span');
closeSpan.classList.add('close');
closeSpan.innerHTML = '&times;';
closeSpan.onclick = function() { modal.style.display = "none"; }

modal.appendChild(closeSpan);
modal.appendChild(modalContent);
modal.appendChild(captionText);
document.body.appendChild(modal);

// Функция открытия модального окна
function openModal(src, alt) {
    modal.style.display = "block";
    modalContent.src = src;
    captionText.innerHTML = alt;
}

// Закрытие модального окна при клике вне изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Кнопка "Наверх"
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = "scrollToTopBtn";
scrollToTopBtn.title = "Наверх";
scrollToTopBtn.innerHTML = '&#8679;'; // Стрелка вверх
document.body.appendChild(scrollToTopBtn);

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ---------------------- Слайдер -------------------------

// Слайдер изображений
let slideIndex = 0;
let slides, dots;

function showSlides() {
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');

    if (slides.length === 0) return; // Если слайдов нет, выйти из функции

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length > 0) {
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        dots[slideIndex - 1].classList.add('active');
    }

    setTimeout(showSlides, 5000); // Смена слайда каждые 5 секунд
}

// Запуск слайдера после загрузки страницы
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides();
});

// contact.js

// Обработка отправки контактной формы
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получение значений полей формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Простая валидация (дополнительно можно использовать регулярные выражения)
    if(name === '' || email === '' || message === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Здесь можно добавить отправку данных на сервер через AJAX или Fetch API

    // Пример отображения уведомления об успешной отправке
    alert('Ваше сообщение успешно отправлено!');

    // Очистка формы
    this.reset();
});

// Модальное окно Галереи (если используется)
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeSpan = document.querySelector(".close");

// Функция открытия модального окна
function openModal(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

// Закрытие модального окна при клике на "x"
closeSpan.onclick = function() { 
    modal.style.display = "none"; 
}

// Закрытие модального окна при клике вне изображения
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Кнопка "Наверх"
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

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

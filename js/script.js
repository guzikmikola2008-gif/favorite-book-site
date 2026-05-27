// Чекаємо, поки завантажиться вся сторінка
document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо нашу кнопку та текст цитати
    const btn = document.getElementById('quoteBtn');
    const quote = document.getElementById('quoteText');

    // Якщо кнопка існує на сторінці, додаємо подію по кліку
    if (btn && quote) {
        btn.addEventListener('click', function() {
            // Перевіряємо, чи прихована цитата
            if (quote.style.display === 'none') {
                quote.style.display = 'block'; // Показуємо текст
                btn.textContent = 'Сховати цитату'; // Змінюємо текст на кнопці
            } else {
                quote.style.display = 'none'; // Ховаємо текст
                btn.textContent = 'Показати цитату Марка Вотні'; // Повертаємо початковий текст
            }
        });
    }
});
document.querySelectorAll('.nav-right a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const form = document.querySelector('.recommendation-form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page refresh

    alert("Thank you for your recommendation! 😊");

    form.reset(); // clear input fields
});

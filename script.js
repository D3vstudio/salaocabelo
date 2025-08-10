document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada! Em breve entraremos em contato.");
});
// Adiciona a animação quando a seção aparece na tela
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});

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


// Inicializa o EmailJS com a sua chave de API
emailjs.init('YA8HK0yZ5nmwmq6e3');

// Função que envia os dados para o EmailJS ao submeter o formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Pegando os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Enviando os dados para o EmailJS
    emailjs.send('service_glktorl', 'template_7soh2v7', {
        nome: nome,
        telefone: telefone,
        email: email,
        mensagem: mensagem
    })
    .then(function(response) {
        console.log('Mensagem enviada com sucesso!', response);
        alert('Mensagem enviada com sucesso!'); // Mensagem de sucesso
    }, function(error) {
        console.log('Falha no envio', error);
        alert('Falha no envio: ' + error); // Mensagem de erro
    });
});

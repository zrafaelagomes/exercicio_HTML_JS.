const formulario = document.getElementById('formulario');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const campoA = parseFloat(document.getElementById('campo-a').value);
    const campoB = parseFloat(document.getElementById('campo-b').value);

    // Limpa mensagens anteriores
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validação
    if (campoB > campoA) {
        successMessage.style.display = 'block'; // Exibe mensagem de sucesso
    } else {
        errorMessage.style.display = 'block'; // Exibe mensagem de erro
    }
});

function validar() {
    // Obtém os valores dos campos de entrada
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Verifica se os campos estão preenchidos
    if (usuario === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // validação simples
    if (usuario === 'admin' && senha === '1234') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

function mostrarOcultarSenha() {
    const senha = document.getElementById('senha');
    const checkbox = document.getElementById('mostrarSenha');

    if (checkbox.checked) {
        senha.type = 'text'; // Mostra a senha
    } else {
        senha.type = 'password'; // Oculta a senha
    }
}
let tentativas = 0; // Variável para contar as tentativas

function validar() {
    // Obtém os valores dos campos de entrada
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Verifica se os campos estão preenchidos
    if (usuario === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Verifica se o usuário excedeu o limite de tentativas
    if (tentativas >= 3) {
        alert(`Usuário ${usuario} foi bloqueado após 3 tentativas incorretas!`);
        return;
    }

    // Validação simples
    const usuarioCorreto = 'admin';
    const senhaCorreta = '1234';

    if (usuario !== usuarioCorreto) {
        alert('Usuário incorreto! Tente novamente.');
        return; // Não gasta tentativa se o usuário estiver errado
    }

    if (senha === senhaCorreta) {
        alert(`Login realizado com sucesso! Bem-vindo, ${usuario}!`);
        tentativas = 0; // Reseta as tentativas após login bem-sucedido
    } else {
        tentativas++; // Incrementa o contador de tentativas apenas se o usuário estiver correto
        const tentativasRestantes = 3 - tentativas;

        if (tentativasRestantes > 0) {
            alert(`Senha incorreta! Você tem mais ${tentativasRestantes} tentativa(s).`);
        } else {
            alert(`Usuário ${usuario} foi bloqueado após 3 tentativas incorretas!`);
        }
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
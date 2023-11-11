/* Script Login*/

const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");

passwordToggle.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.978.293a1 1 0 0 1 .044 1.414l-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l3.5-3.5a1 1 0 0 1 1.497 0zM8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/><path fill-rule="evenodd" d="M9.293 7.978a1 1 0 0 1 1.414.044l3.5 3.5a1 1 0 0 1-1.32 1.497l-.094-.083a1 1 0 0 1-.083-1.32l-3.5-3.5a1 1 0 0 1 0-1.414z"/><path d="M7.646 8.854a.5.5 0 0 1 .708 0L8 9.207l.646-.646a.5.5 0 1 1 .708.708L8.707 10l.647.646a.5.5 0 0 1-.708.708L8 10.707l-.646.647a.5.5 0 0 1-.708-.708L7.293 10l-.647-.646a.5.5 0 0 1 0-.708z"/></svg>';
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 1.646a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M1.146 7.646a7.5 7.5 0 0 1 10.51 0 .5.5 0 0 0 .708 0 8.5 8.5 0 0 0-11.916 0 .5.5 0 0 0 .708 0z"/><path fill-rule="evenodd" d="M8 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
    }
});

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (password.length < 8) {
        alert("A senha deve conter no mínimo 8 caracteres.");
        return false;
    }

    if (username.indexOf("@") === -1) {
        alert("Endereço de e-mail do usuário está incompleto.");
        return false;
    }

    return true;
}


/* Script Cadastro*/


document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validarFormulario()) {
        exibirMensagemCadastroConcluido();
    }
});

document.getElementById('cpf').addEventListener('input', function () {
    const cpfInput = this;
    const cpfCounter = document.getElementById('cpf-counter');
    const cpfError = document.getElementById('cpf-error');
    const cpfValue = cpfInput.value;
    const cpfLength = cpfValue.length;

    const cpfRegex = /^\d{11}$/;

    if (cpfRegex.test(cpfValue)) {
        cpfCounter.textContent = cpfLength + '/11';
        cpfError.textContent = '';
    } else {
        cpfCounter.textContent = cpfLength + '/11';
        cpfError.textContent = 'CPF inválido! Digite novamente.';
    }
});

document.getElementById('confirmarEmail').addEventListener('input', function () {
    const emailInput = document.getElementById('email');
    const confirmarEmailInput = this;
    const emailError = document.getElementById('email-error');
    const emailValue = emailInput.value;
    const confirmarEmailValue = confirmarEmailInput.value;

    if (emailValue !== confirmarEmailValue) {
        emailError.textContent = 'Os emails não coincidem.';
    } else {
        emailError.textContent = '';
    }
});

function exibirMensagemCadastroConcluido() {
    const alertCadastro = document.querySelector('.alert-cadastro');
    alertCadastro.style.display = 'block';
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (!nome || !cpf || !dataNascimento || !email || !senha || !confirmarSenha) {
        alert('Todos os campos são obrigatórios.');
        return false;
    }

    if (senha.length < 8) {
        alert('A senha deve conter no mínimo 8 caracteres.');
        return false;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return false;
    }

    if (email !== confirmarEmail) {
        alert('Os emails não coincidem.');
        return false;
    }

    return true;
}




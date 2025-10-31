function infoLS() {
    salvarLS();
    document.getElementById('user_name').innerHTML = localStorage.getItem('infoLS');
    var btnArmazenaLS = document.getElementById('autenticar_btn');
    btnArmazenaLS.addEventListener("click", () => {
        window.location.href = "../../pag1.html";
    });
}

function redirecionar() {
    var btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener("click", () => {
        window.location.href = "../../pag2.html";
    });
}

function salvarLS() {
    const inputUser = document.getElementById('user_name').value;
    const senha = document.getElementById('senha_login').value;

    if ((inputUser === "") || (senha === "")) {
        alert("Preencha os campos senha e usuario para autenticar!");
    } else {
        localStorage.setItem('inputUser', inputUser);
        alert("Autenticado com sucesso " + localStorage.getItem('inputUser'));
        return localStorage.getItem('inputUser');
    }
}

function atualizarStatusLogin() {
    const usuario = localStorage.getItem('inputUser');
    const textoUser = document.getElementById('texto_autenticador');
    if (usuario) {
        textoUser.innerText = `Usuário Logado: ${usuario}`;
        mudarIcone();
    }
}

function estaLogado() {
    var btnEstaLogado = document.getElementById('autenticar_btn');
    btnEstaLogado.addEventListener("click", () => {
        const user = salvarLS();
        if (user) atualizarStatusLogin();
    });
}

function mudarIcone() {
    const icone = document.getElementById('user_icon');
    icone.src = "src/images/face_5_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
}

function chamarPagDados() {
    const icone = document.getElementById('user_icon');
    var btnCadastro = document.getElementById('user_icon');
    if (icone.src.endsWith("src/images/face_5_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg")) {
        btnCadastro.addEventListener("click", () => {
            window.location.href = "../../pag3.html";
        });
    } else {
        alert("Usuário não logado!");
    }

}

function limparDados() {
    var btn = document.getElementById('btn_limpar');
    var nome = document.getElementById('nome_dono');
    var nomePet = document.getElementById('nome_pet');
    var racaPet = document.getElementById('raca_pet')
    btn.addEventListener("click", () => {
        if ((nome.value.trim() != null && nome.value.trim() != "") || (nomePet.value.trim() != null && nomePet.value.trim() != "")
            || (racaPet.value.trim() != null && racaPet.value.trim() != "")) {
            nome.innerText = "";
            nomePet.innerText = "";
            racaPet.innerText = "";
        } else {
            alert("Não há dados para limpar!");
        }
    });
}

function estiloPagina() {
    const selecionado = document.querySelector('input[name="tipo_pg"]:checked');
    const lbls = document.querySelectorAll('label');
    const inputs = document.querySelectorAll('input');

    if (selecionado) {

        if (selecionado.id === 'estilo_1') {
            lbls.forEach(label => {
                label.style.fontFamily = 'Inter';
            });
            inputs.forEach(input => {
                input.style.backgroundColor = 'white';
            });
        } else if (selecionado.id === 'estilo_2') {
            lbls.forEach(label => {
                label.style.fontFamily = 'Courier New, Courier, monospace';;
            });
            inputs.forEach(input => {
                input.style.backgroundColor = 'red';
            });
        }
    }
}

function inicializarEstilos() {
    const radios = document.querySelectorAll('input[name="tipo_pg"]');
    radios.forEach(radio => {
        radio.addEventListener('change', estiloPagina);
    });

    estiloPagina();
}

window.addEventListener("DOMContentLoaded", inicializarEstilos);
window.addEventListener("load", estiloPagina);
window.addEventListener("load", atualizarStatusLogin);


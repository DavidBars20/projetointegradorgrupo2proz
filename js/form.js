//* CAPTURAR ELEMENTOS NO DOM E ASSOCIAR A VARIÁVEIS */

/*  USERNAME  */
let userInput = document.getElementById('username');
let userLabel = document.querySelector('label[for="username"]');
let userHelper = document.getElementById('username-helper');

/*  CPF  */
let cpfInput = document.getElementById('cpf');
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfHelper = document.getElementById('cpf-helper');

/*  EMAIL  */
let emailInput = document.getElementById('email');
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById('email-helper');

/*  RUA  */
let ruaInput = document.getElementById('rua');
let ruaLabel = document.querySelector('label[for="rua"]');
let ruaHelper = document.getElementById('rua-helper');

/*  NÚMERO  */
let numeroInput = document.getElementById('numero');
let numeroLabel = document.querySelector('label[for="numero"]');
let numeroHelper = document.getElementById('numero-helper');

/*  COMPLEMENTO  */
let complementoInput = document.getElementById('complemento');
let complementoLabel = document.querySelector('label[for="complemento"]');
let complementoHelper = document.getElementById('complemento-helper');

/*  CEP  */
let cepInput = document.getElementById('cep');
let cepLabel = document.querySelector('label[for="cep"]');
let cepHelper = document.getElementById('cep-helper');

/*  SENHA  */
let senhaInput = document.getElementById('senha');
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById('senha-helper');

/*  CONFIRMA SENHA  */
let confirmaSenhaInput = document.getElementById('confirma-senha');
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper');

/* SUBMIT */
let bnt = document.querySelector("button[type=submit]");



//---------------------------------------------//
/*FUNÇÃO GERAL TOGGLE POPUP */
function popup(input, label){

    /* MOSTRAR POPUP DE CAMPO OBRIGATÓRIO */
    input.addEventListener("focus", () => {
        label.classList.add('required-popup');
    });

    /* OCULTAR POPUP DE CAMPO OBRIGATÓRIO */
    input.addEventListener("blur", () => {
        label.classList.remove('required-popup');
    });
}

/* CHAMAR A FUNÇÃO POPUP */
popup(userInput, userLabel);
popup(cpfInput, cpfLabel);
popup(emailInput, emailLabel);
/*
popup(ruaInput, emailLabel);
popup(numeroInput, emailLabel);
popup(cepInput, emailLabel);
*/
popup(senhaInput, senhaLabel);
popup(confirmaSenhaInput, confirmaSenhaLabel);



//---------------------------------------------//
/* FUNÇÃO GERAL VALIDAR VALOR INPUT */
/* CORRETO*/
function inputCorreto(input, helper) {
    helper.classList.remove('visible');
    input.classList.remove('error');
    input.classList.add('correct');
}

/* INCORRETO*/
function inputIncorreto(input, helper) {
    helper.classList.add('visible');
    input.classList.add('error');
    input.classList.remove('correct');
}



//---------------------------------------------//
/* VALIDAR VALOR INPUT */

/* USERNAME */
userInput.addEventListener("change", (e)=> {
    let valor = e.target.value;
  
    if (valor.length < 3) {
        //Adicionar estilos dinâmicos se o valor estiver incorreto
        inputIncorreto(userInput, userHelper);
        userHelper.innerText = "Seu nome de usuário precisa ter 3 ou mais caracteres";
        //Adicionando variável com valor para o submit/validação do formulário
        inputsCorretos.user = false;
    } else { 
        //Adicionar estilos dinâmicos se o valor estiver correto
        inputCorreto(userInput, userHelper);
        //Adicionando variável com valor para o submit/validação do formulário
        inputsCorretos.user = true;
    }
})


/*  EMAIL  */
emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if (valor.includes('@') && valor.includes('.com') === true) { 
        inputCorreto(emailInput, emailHelper);
        inputsCorretos.email = true;
    } else { 
        inputIncorreto(emailInput, emailHelper);
        emailHelper.innerText = "Insira um e-mail válido";
        inputsCorretos.email = false;
    }
})

/* FAZER: rua numero complemento cep */

/*  RUA  
ruaInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if () { 
        inputCorreto(ruaInput, ruaHelper);
        inputsCorretos.email = true;
    } else { 
        inputIncorreto(ruaInput, ruaHelper);
        ruaHelper.innerText = "Insira um endereço válido";
        inputsCorretos.rua = false;
    }
})

/*  NÚMERO  
numeroInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if () { 
        inputCorreto(numeroInput, numeroHelper);
        inputsCorretos.numero = true;
    } else { 
        inputIncorreto(numeroInput, numeroHelper);
        numeroHelper.innerText = "Insira um número válido";
        inputsCorretos.numero = false;
    }
})

/*  CEP  
cepInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if () { 
        inputCorreto(cepInput, cepHelper);
        inputsCorretos.cep = true;
    } else { 
        inputIncorreto(cepInput, cepHelper);
        cepHelper.innerText = "Insira um CEP válido";
        inputsCorretos.cep = false;
    }
})

*/

/*  SENHA  */
senhaInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;

    if (valor.length >= 6 === true) {
        inputCorreto(senhaInput, senhaHelper);
        inputsCorretos.senha = true;
    } else {
        inputIncorreto(senhaInput, senhaHelper);
        senhaHelper.innerText = "Sua senha precisa ter 6 ou mais caracteres";
        inputsCorretos.senha = false;
    }
})


/* CONFIRMAR SENHA  */
confirmaSenhaInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;

    if (valor === senhaInput.value) {
        inputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
        inputsCorretos.confirmaSenha = true;
    } else {
        inputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
        confirmaSenhaHelper.innerText = "As senhas precisam ser iguais";
        inputsCorretos.confirmaSenha = false;
    }
})


//---------------------------------------------//
/* SUBMETENDO FORMULÁRIO */

let inputsCorretos = {
    username: false,
    cpf: false,
    email: false,
    rua: false,
    numero: false,
    complemento: false,
    cep: false,
    senha: false,
    confirmaSenha: false
} // Primeiramente eles são carregados com false, pois se eles forem true, o formulário será enviado com sucesso no 1° carregamento da página

bnt.addEventListener("click", (e) => {
    if (inputsCorretos.username == false || inputsCorretos.cpf == false || inputsCorretos.email == false || inputsCorretos.rua == false || inputsCorretos.numero == false || inputsCorretos.complemento == false || inputsCorretos.cep == false || inputsCorretos.senha == false || inputsCorretos.confirmaSenha == false) {
        e.preventDefault();
        alert("Verifique os campos e tente novamente");
    } else {
        alert("Formulário enviado com sucesso!");
    }
})
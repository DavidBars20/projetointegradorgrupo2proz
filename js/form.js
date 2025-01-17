/////////////////////////////////////////////////////
////BARRA DE PROGRESSO

// CAPTURA ELEMENTOS
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const plano1 = document.querySelector('input[name="plano1"]');
const plano2 = document.querySelector('input[name="plano2"]');
const plano3 = document.querySelector('input[name="plano3"]');
const planos = document.querySelectorAll('input[type="checkbox"]');

const progress = document.getElementById('progress');

const nextBtn1 = document.querySelector('.next-1');
const prevBtn1 = document.querySelector('.prev-1');
const nextBtn2 = document.querySelector('.next-2');
const prevBtn2 = document.querySelector('.prev-2');
const submit = document.querySelector('.submit');

//BOTÕES

nextBtn1.addEventListener('click', function(e) {

    //VALIDAÇÃO DOS PLANOS
    if (plano1.checked || plano2.checked || plano3.checked) {
        form1.style.left = "-450px";
        form2.style.left = "40px";    
        progress.style.width = "240px";
    } else {
        e.preventDefault();
        alert('Selecione um plano');
    }
})

prevBtn1.addEventListener('click', function() {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";
})

nextBtn2.addEventListener('click', function() {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "400px";
})

prevBtn2.addEventListener('click', function() {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
})








/////////////////////////////////////////////////////
////VALIDAÇÃO FORMULÁRIO

// CAPTURA ELEMENTOS
/*  PLANO 1*/
let plano1Input = document.querySelector("input[name='plano1']");

/*  PLANO 2*/
let plano2Input = document.querySelector("input[name='plano2']");

/*  PLANO 3*/
let plano3Input = document.querySelector("input[name='plano3']");

/*  USERNAME  */
let usernameLabel = document.querySelector('label[for="username"]');
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-helper");

/*  CPF  */
let cpfLabel = document.querySelector('label[for="cpf"]');
let cpfInput = document.getElementById("cpf");
let cpfHelper = document.getElementById("cpf-helper");

/*  EMAIL  */
let emailLabel = document.querySelector('label[for="email"]');
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

/*  RUA  */
let ruaLabel = document.querySelector('label[for="rua"]');
let ruaInput = document.getElementById("rua");
let ruaHelper = document.getElementById("rua-helper");


/*  NUMERO  */
let numeroLabel = document.querySelector('label[for="numero"]');
let numeroInput = document.getElementById("numero");
let numeroHelper = document.getElementById("numero-helper");

/*  COMPLEMENTO  */
let complementoLabel = document.querySelector('label[for="complemento"]');
let complementoInput = document.getElementById("complemento");
let complementoHelper = document.getElementById("complemento-helper");

/*  CEP  */
let cepLabel = document.querySelector('label[for="cep"]');
let cepInput = document.getElementById("cep");
let cepHelper = document.getElementById("cep-helper");

/*  SENHA  */
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaInput = document.getElementById("senha");
let senhaHelper = document.getElementById("senha-helper");

/*  CONFIRMA SENHA  */
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

/*  NÚMERO CARTÃO  */
let numCartaoLabel = document.querySelector('label[for="numero-cartao"]');
let numCartaoInput = document.getElementById("numero-cartao");
let numCartaoHelper = document.getElementById("numero-cartao-helper");

/* CVC  */
let cvcLabel = document.querySelector('label[for="cvc"]');
let cvcInput = document.getElementById("cvc");
let cvcHelper = document.getElementById("cvc-helper");

/*  VALIDADE  */
let validadeLabel = document.querySelector('label[for="validade"]');
let validadeInput = document.getElementById("validade");
let validadeHelper = document.getElementById("validade-helper");

/*  NOME CARTÃO  */
let nomeCartaoLabel = document.querySelector('label[for="nome-cartao"]');
let nomeCartaoInput = document.getElementById("nome-cartao");
let nomeCartaoHelper = document.getElementById("nome-cartao-helper");

/*  SUBMIT  */
const submmit = document.querySelector('button[type="submit"]');


/////////////////////////////////////////////////////
// TOGGLE POPUP
function togglePopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
        input.classList.add("input-erro");
    })
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
        input.classList.remove("input-erro");
    })
}

togglePopup(usernameInput, usernameLabel);
togglePopup(cpfInput, cpfLabel);
togglePopup(emailInput, emailLabel);    
togglePopup(ruaInput, ruaLabel);
togglePopup(numeroInput, numeroLabel);
togglePopup(cepInput, cepLabel);
togglePopup(senhaInput, senhaLabel);
togglePopup(confirmaSenhaInput, confirmaSenhaLabel);
togglePopup(numCartaoInput, numCartaoLabel);
togglePopup(cvcInput, cvcLabel);
togglePopup(validadeInput, validadeLabel);
togglePopup(nomeCartaoInput, nomeCartaoLabel);


/////////////////////////////////////////////////////
// CLASSES INPUT CORRETO E INCORRETO

function inputCorreto (input, helper) {
    input.classList.remove("error");
    helper.classList.remove("visible");
    input.classList.add("correct");
}

function inputIncorreto (input, helper) {
    input.classList.add("error");
    helper.classList.add("visible");
    input.classList.remove("correct");
}


/////////////////////////////////////////////////////
// CONDICIONAL PARA VALIDAR

/* USERNAME */
usernameInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if (valor.length <3) {
        inputIncorreto(usernameInput, usernameHelper);
        usernameHelper.innerText = "O nome de usuário precisa ter pelo menos 3 letras";
        inputsCorretos = false;
    } else {
        inputCorreto(usernameInput, usernameHelper);
        inputsCorretos = true;
    }
})


/*  EMAIL  */
emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value;

    if (valor.includes('@') && valor.includes('.com')) { 
        inputCorreto(emailInput, emailHelper);
        inputsCorretos.email = true;
    } else { 
        inputIncorreto(emailInput, emailHelper);
        emailHelper.innerText = "Insira um e-mail válido";
        inputsCorretos.email = false;
    }
})


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

/*  CEP  */  
cepInput.addEventListener("focusout", (e)=> {
    let valor = e.target.value;

    const cepValido = /^[0-9]{8}$/;
    const response = fetch(`https://viacep.com.br/ws/${valor}/json/`);


    if (cepValido === true && response.ok) {
        const responseCep = response.json();
        inputCorreto(cepInput, cepHelper);
        inputsCorretos.cep = true;
        ruaInput.value = responseCep.logradouro;
    } else { 
        inputIncorreto(cepInput, cepHelper);
        cepHelper.innerText = "Insira um CEP válido";
        inputsCorretos.cep = false;''
    }
})






/*  SENHA  */
senhaInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;

    if (valor.length >= 6) {
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


/*  NÚMERO CARTÃO  */

/* CVC  */
cvcInput.addEventListener("blur", (e)=> {
    let valor = e.target.value;

    if (valor.length == 3) {
        inputCorreto(cvcInput, cvcHelper);
        inputsCorretos.cvc = true;
    } else {
        inputIncorreto(cvcInput, cvcHelper);
        cvcHelper.innerText = "Precisa ter 3 números";
        inputsCorretos.confirmaSenha = false;
    }
})



/*  VALIDADE  */

/*  NOME CARTÃO  */




/////////////////////////////////////////////////////
// SUBMETENDO FORMULÁRIO

let inputsCorretos = {
    username: false,
    cpf: false,
    email: false,
    /*
    rua: false,
    numero: false,
    complemento: false,
    cep: false,
    */
    senha: false,
    confirmarSenha: false
    /*
    nomeCartao: false,
    numeroCartao: false,
    validadeCartao: false,
    cvcCartao: false
    */
}

submit.addEventListener("click", (e) => {
    if(inputsCorretos.username == false || inputsCorretos.cpf == false || inputsCorretos.email == false || /* inputsCorretos.rua == false || inputsCorretos.numero == false || inputsCorretos.complemento == false || inputsCorretos.cep == false || inputsCorretos.cvc == false || inputsCorretos.validadeCartao == false || inputsCorretos.nomeCartao == false || inputsCorretos.numeroCartao == false ||*/inputsCorretos.senha == false || inputsCorretos.confirmaSenha == false) {
        e.preventDefault();
        alert("Verifique os dados e tente novamente");
    } else {
        alert("Formulário enviado com sucesso");
    }
})
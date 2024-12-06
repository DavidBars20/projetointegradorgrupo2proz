/////////////////////////////////////////////////////
////BARRA DE PROGRESSO

// CAPTURA ELEMENTOS

/*
const slideForm =  document.querySelector('.slideForm');
const nextBtn1 = document.querySelector('.nextBtn');
const prevBtn1 = document.querySelector('.prev-1');
const nextBtn2 = document.querySelector('.next-1');
const prevBtn2 = document.querySelector('.prev-2');
const submit = document.querySelector('.submit');


nextBtn1.addEventListener('click', () => {
    slideForm.style.marginLeft = "-25%";
})







/////////////////////////////////////////////////////
////FORMULARIO


// CAPTURA ELEMENTOS
/*  USERNAME  */
let usernameLabel = document.querySelector("label[for='username']");
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-helper");

/*  CPF  */
let cpfLabel = document.querySelector("label[for='cpf']");
let cpfInput = document.getElementById("cpf");
let cpfHelper = document.getElementById("cpf-helper");

/*  EMAIL  */
let emailLabel = document.querySelector("label[for='email']");
let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

/*  RUA  */
let ruaLabel = document.querySelector("label[for='rua']");
let ruaInput = document.getElementById("rua");
let ruaHelper = document.getElementById("rua-helper");

/*  NUMERO  */
let numeroLabel = document.querySelector("label[for='numero']");
let numeroInput = document.getElementById("numero");
let numeroHelper = document.getElementById("numero-helper");

/*  COMPLEMENTO  */
let complementoLabel = document.querySelector("label[for='complemento']");
let complementoInput = document.getElementById("complemento");
let complementoHelper = document.getElementById("complemento-helper");

/*  CEP  */
let cepLabel = document.querySelector("label[for='cep']");
let cepInput = document.getElementById("cep");
let cepHelper = document.getElementById("cep-helper");

/*  SENHA  */
let senhaLabel = document.querySelector("label[for='senha']");
let senhaInput = document.getElementById("senha");
let senhaHelper = document.getElementById("senha-helper");

/*  CONFIRMA SENHA  */
let confirmarSenhaLabel = document.querySelector("label[for='confirmar-senha']");
let confirmarSenhaInput = document.getElementById("confirmar-senha");
let confirmarSenhaHelper = document.getElementById("confirmar-senha-helper");




/////////////////////////////////////////////////////
// TOGGLE POPUP
function togglePopup(input, label) {
    input.addEventListener("focus", ()=> {
        label.classList.add("required-popup");
    })
    input.addEventListener("blur", ()=> {
        label.classList.remove("required-popup");
    })
}

togglePopup(usernameInput, usernameLabel);
togglePopup(cpfInput, cpfLabel);
togglePopup(emailInput, emailLabel);    
togglePopup(ruaInput, ruaLabel);
togglePopup(numeroInput, numeroLabel);
togglePopup(complementoInput, complementoLabel);
togglePopup(cepInput, cepLabel);
togglePopup(senhaInput, senhaLabel);
togglePopup(confirmarSenhaInput, confirmarSenhaLabel);





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
}

btn.addEventListener("click", (e) => {
    if(inputsCorretos.username == false || inputsCorretos.cpf == false || inputsCorretos.email == false || /* inputsCorretos.rua == false || inputsCorretos.numero == false || inputsCorretos.complemento == false || inputsCorretos.cep == false || */inputsCorretos.senha == false || inputsCorretos.confirmaSenha == false) {
        e.preventDefault();
        alert("Verifique os dados e tente novamente");
    } else {
        alert("Formulário enviado com sucesso");
    }
})
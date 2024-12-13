/////////////////////////////////////////////////////
////BARRA DE PROGRESSO

// CAPTURA ELEMENTOS
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');

const progress = document.getElementById('progress');

const nextBtn1 = document.querySelector('.next-1');
const prevBtn1 = document.querySelector('.prev-1');
const nextBtn2 = document.querySelector('.next-2');
const prevBtn2 = document.querySelector('.prev-2');
const submit = document.querySelector('.submit');


nextBtn1.addEventListener('click', function() {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
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
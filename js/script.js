


//codigo do menu hmburg
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('ativo')
})











// codigo do chat do whatsapp
const botao = document.querySelector('.whatsapp-button');
const chat = document.querySelector('.whatsapp-chat');

botao.addEventListener('click', () => {
  chat.classList.toggle('ativo');
});
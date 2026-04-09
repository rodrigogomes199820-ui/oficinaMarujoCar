// codigo do scroll suave

const scrollSuave = document.querySelectorAll('a[href^="#"]');

scrollSuave.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const id = link.getAttribute("href");
    const section = document.querySelector(id);

    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

//codigo do menu hmburg
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

// codigo do chat do whatsapp
const botao = document.querySelector(".whatsapp-button");
const chat = document.querySelector("#chatBox");
const enviar = document.querySelector("#enviarWhats");

botao.addEventListener("click", () => {
  chat.classList.toggle("ativo");
});

enviar.addEventListener("click", () => {
  const nome = document.querySelector("#nome").value;
  const data = document.querySelector("#data").value;
  const hora = document.querySelector("#hora").value;
  const mensagemExtra = document.querySelector("#mensagem").value;

  if (!nome || !data || !hora) {
    alert("Preencha nome, data e horário!");
    return;
  }

  const mensagem = `Olá, meu nome é ${nome}.
Quero agendar um serviço.

 Data: ${data}
 Hora: ${hora}

 Serviço: ${mensagemExtra || "Não informado"}`;

  const url = `https://wa.me/557599294167?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});



// imagens
document.addEventListener("DOMContentLoaded", () => {

  const galeria = document.querySelector('.galeria');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  if (!galeria || !next || !prev) return;

  // BOTÃO DIREITA ▶
  next.addEventListener('click', () => {
    galeria.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  // BOTÃO ESQUERDA ◀
  prev.addEventListener('click', () => {
    galeria.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

  // 🔥 AUTO SCROLL (opcional)
  let auto = setInterval(() => {
    galeria.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  }, 4000);

  // PAUSA QUANDO PASSA O MOUSE
  galeria.addEventListener('mouseenter', () => {
    clearInterval(auto);
  });

  galeria.addEventListener('mouseleave', () => {
    auto = setInterval(() => {
      galeria.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }, 4000);
  });

});
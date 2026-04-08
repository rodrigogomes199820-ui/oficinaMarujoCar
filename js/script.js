


//codigo do menu hmburg
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('ativo')
})





// MODAL
const botaoModal = document.querySelector('.abrirModal');
const modal = document.querySelector('.modal');
const enviar = document.querySelector('#enviar');

botaoModal.addEventListener('click', () => {
  modal.classList.add('ativo');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('ativo');
  }
});


enviar.addEventListener('click', () => {
  const nome = document.querySelector('#nome').value;
  const servico = document.querySelector('#servico').value;
  const data = document.querySelector('#data').value;
  const hora = document.querySelector('#hora').value;
  const mensagemExtra = document.querySelector('#mensagemExtra').value;

  const telefone = "557599294167";

  const mensagem = `Olá, meu nome é ${nome}.
Quero agendar um serviço:

🔧 Serviço: ${servico}
📅 Data: ${data}
⏰ Hora: ${hora}

📝 Problema: ${mensagemExtra}`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
});

















// codigo do chat do whatsapp
const botao = document.querySelector('.whatsapp-button');
const chat = document.querySelector('.whatsapp-chat');

botao.addEventListener('click', () => {
  chat.classList.toggle('ativo');
 
});

 chat.classList.remove('ativo');

































document.addEventListener("DOMContentLoaded", () => {

const carros = {
  Fiat: [
    {
      modelo: "Uno",
      anos: [
        { de: 1995, ate: 2004, oleo: ["20W-50"], capacidade: "3.2L" }, // motor Fiasa
        { de: 2005, ate: 2013, oleo: ["15W-40"], capacidade: "2.9L" } // motor Fire
      ],
      filtroOleo: "PSL55 / W712/52",
      filtroAr: "ARL4147",
      filtroCombustivel: "GI10"
    },
    {
      modelo: "Palio",
      anos: [
        { de: 1996, ate: 2004, oleo: ["20W-50"], capacidade: "3.2L" },
        { de: 2005, ate: 2017, oleo: ["15W-40","10W-40"], capacidade: "2.9L" } // Fire
      ],
      filtroOleo: "PSL55 / W712/52",
      filtroAr: "ARL4147",
      filtroCombustivel: "GI10"
    },
    {
      modelo: "Argo",
      anos: [
        { de: 2017, ate: 2025, oleo: ["0W-20","5W-30"], capacidade: "3.0L" } // Firefly
      ],
      filtroOleo: "PSL639 / W610/3",
      filtroAr: "ARL4205",
      filtroCombustivel: "interno (tanque)"
    }
  ],

  Volkswagen: [
    {
      modelo: "Gol",
      anos: [
        { de: 1995, ate: 2008, oleo: ["20W-50"], capacidade: "3.5L" }, // AP
        { de: 2009, ate: 2025, oleo: ["5W-40","10W-40"], capacidade: "3.2L" } // EA111 / MSI
      ],
      filtroOleo: "W712/52 / PSL55",
      filtroAr: "ARL4158",
      filtroCombustivel: "KL582"
    }
  ],

  Chevrolet: [
    {
      modelo: "Celta",
      anos: [
        { de: 2001, ate: 2015, oleo: ["15W-40","10W-40"], capacidade: "3.5L" } // VHCE
      ],
      filtroOleo: "PSL619 / W712/22",
      filtroAr: "ARL4158",
      filtroCombustivel: "GI06"
    },
    {
      modelo: "Onix",
      anos: [
        { de: 2013, ate: 2019, oleo: ["5W-30"], capacidade: "3.5L" }, // SPE/4
        { de: 2020, ate: 2025, oleo: ["0W-20"], capacidade: "3.5L" } // turbo
      ],
      filtroOleo: "PSL639 / W610/3",
      filtroAr: "ARL4205",
      filtroCombustivel: "interno (tanque)"
    }
  ]
};
 



const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");
const anoSelect = document.getElementById("ano");

// MARCAS
marcaSelect.innerHTML = '<option value="">Marca</option>' +
  Object.keys(carros)
    .map(m => `<option value="${m}">${m}</option>`)
    .join("");

// MODELOS
marcaSelect.addEventListener("change", () => {
  const marca = marcaSelect.value;

  if (!marca) return;

  modeloSelect.innerHTML = '<option value="">Modelo</option>' +
    carros[marca]
      .map(c => `<option value="${c.modelo}">${c.modelo}</option>`)
      .join("");
});

// ANOS
const anos = Array.from({ length: 31 }, (_, i) => 2025 - i);

anoSelect.innerHTML = '<option value="">Ano</option>' +
  anos.map(a => `<option value="${a}">${a}</option>`).join("");

// BUSCA (CORRIGIDA COM ANO)
window.buscarOleo = function () {
  const marca = marcaSelect.value;
  const modelo = modeloSelect.value;
  const ano = parseInt(anoSelect.value);
  const resultado = document.getElementById("resultado");

  if (!marca || !modelo || !ano) {
    resultado.innerHTML = "Selecione marca, modelo e ano";
    return;
  }

  const carro = carros[marca].find(c => c.modelo === modelo);

  if (!carro) {
    resultado.innerHTML = "Veículo não encontrado";
    return;
  }

  // 🔥 AQUI ESTÁ A CORREÇÃO
  const infoAno = carro.anos.find(a => ano >= a.de && ano <= a.ate);

  if (!infoAno) {
    resultado.innerHTML = "Ano não cadastrado para esse veículo";
    return;
  }

  resultado.style.display = "block";

  resultado.innerHTML = `
    <h3>${marca} ${carro.modelo} - ${ano}</h3>
    <p><strong>Óleo:</strong> ${infoAno.oleo.join(", ")}</p>
    <p><strong>Capacidade:</strong> ${infoAno.capacidade}</p>
    <p><strong>Filtro de óleo:</strong> ${carro.filtroOleo}</p>
    <p><strong>Filtro de ar:</strong> ${carro.filtroAr}</p>
    <p><strong>Filtro de combustível:</strong> ${carro.filtroCombustivel}</p>
  `;
};

});



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


 document.addEventListener("DOMContentLoaded", () => {

const carros = [
  // FIAT
  { marca: "Fiat", modelo: "Uno", oleo: ["15W-40","20W-50"], capacidade: "3.0L", filtroOleo: "PSL55", filtroAr: "ARL4147", filtroCombustivel: "GI10" },
  { marca: "Fiat", modelo: "Palio", oleo: ["15W-40","10W-40"], capacidade: "3.2L", filtroOleo: "PSL55", filtroAr: "ARL4147", filtroCombustivel: "GI10" },
  { marca: "Fiat", modelo: "Strada", oleo: ["15W-40","10W-40"], capacidade: "3.5L", filtroOleo: "PSL55", filtroAr: "ARL4147", filtroCombustivel: "GI10" },
  { marca: "Fiat", modelo: "Mobi", oleo: ["0W-20"], capacidade: "3.0L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Fiat", modelo: "Argo", oleo: ["0W-20","5W-30"], capacidade: "3.6L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Fiat", modelo: "Cronos", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },

  // VOLKSWAGEN
  { marca: "Volkswagen", modelo: "Gol", oleo: ["5W-40","10W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Fox", oleo: ["5W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Polo", oleo: ["0W-20","5W-40"], capacidade: "3.6L", filtroOleo: "W712/95", filtroAr: "ARL4201", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Voyage", oleo: ["5W-40","10W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Saveiro", oleo: ["5W-40","10W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },

  // CHEVROLET
  { marca: "Chevrolet", modelo: "Celta", oleo: ["15W-40","10W-40"], capacidade: "3.0L", filtroOleo: "PSL619", filtroAr: "ARL4147", filtroCombustivel: "GI06" },
  { marca: "Chevrolet", modelo: "Corsa", oleo: ["15W-40","10W-40"], capacidade: "3.5L", filtroOleo: "PSL619", filtroAr: "ARL4147", filtroCombustivel: "GI06" },
  { marca: "Chevrolet", modelo: "Onix", oleo: ["0W-20"], capacidade: "3.5L", filtroOleo: "PSL639", filtroAr: "ARL4205", filtroCombustivel: "interno (tanque)" },
  { marca: "Chevrolet", modelo: "Prisma", oleo: ["5W-30"], capacidade: "3.5L", filtroOleo: "PSL619", filtroAr: "ARL4147", filtroCombustivel: "GI06" },
  { marca: "Chevrolet", modelo: "Classic", oleo: ["15W-40","20W-50"], capacidade: "3.5L", filtroOleo: "PSL619", filtroAr: "ARL4147", filtroCombustivel: "GI06" },

  // FORD
  { marca: "Ford", modelo: "Ka", oleo: ["5W-20"], capacidade: "3.3L", filtroOleo: "PSL655", filtroAr: "ARL4160", filtroCombustivel: "interno (tanque)" },
  { marca: "Ford", modelo: "Fiesta", oleo: ["5W-30"], capacidade: "3.5L", filtroOleo: "PSL655", filtroAr: "ARL4160", filtroCombustivel: "GI44" },
  { marca: "Ford", modelo: "Focus", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL960", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
  { marca: "Ford", modelo: "EcoSport", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL960", filtroAr: "ARL4170", filtroCombustivel: "GI44" },

  // HYUNDAI
  { marca: "Hyundai", modelo: "HB20", oleo: ["5W-30","0W-20"], capacidade: "3.3L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Hyundai", modelo: "HB20S", oleo: ["5W-30","0W-20"], capacidade: "3.3L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Hyundai", modelo: "Creta", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Hyundai", modelo: "Tucson", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL655", filtroAr: "ARL4170", filtroCombustivel: "GI44" },

  // RENAULT
  { marca: "Renault", modelo: "Kwid", oleo: ["5W-30"], capacidade: "3.1L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Renault", modelo: "Sandero", oleo: ["5W-40"], capacidade: "4.0L", filtroOleo: "PSL55", filtroAr: "ARL4147", filtroCombustivel: "GI10" },
  { marca: "Renault", modelo: "Logan", oleo: ["5W-40"], capacidade: "4.0L", filtroOleo: "PSL55", filtroAr: "ARL4147", filtroCombustivel: "GI10" },
  { marca: "Renault", modelo: "Duster", oleo: ["5W-30"], capacidade: "4.5L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },

  // TOYOTA
  { marca: "Toyota", modelo: "Corolla", oleo: ["0W-20"], capacidade: "4.2L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "interno (tanque)" },
  { marca: "Toyota", modelo: "Etios", oleo: ["5W-30"], capacidade: "3.7L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Toyota", modelo: "Yaris", oleo: ["0W-20"], capacidade: "3.7L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Toyota", modelo: "Hilux", oleo: ["5W-30"], capacidade: "5.5L", filtroOleo: "PSL962", filtroAr: "ARL4170", filtroCombustivel: "diesel (separador)" },

  // HONDA
  { marca: "Honda", modelo: "Civic", oleo: ["0W-20"], capacidade: "4.2L", filtroOleo: "PSL127", filtroAr: "ARL4170", filtroCombustivel: "interno (tanque)" },
  { marca: "Honda", modelo: "Fit", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL127", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Honda", modelo: "City", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL127", filtroAr: "ARL4200", filtroCombustivel: "interno (tanque)" },
  { marca: "Honda", modelo: "HR-V", oleo: ["0W-20"], capacidade: "4.0L", filtroOleo: "PSL127", filtroAr: "ARL4170", filtroCombustivel: "interno (tanque)" }
];
const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");
const anoSelect = document.getElementById("ano");

// MARCAS
const marcas = [...new Set(carros.map(c => c.marca))];
marcas.forEach(marca => {
  const option = document.createElement("option");
  option.value = marca;
  option.textContent = marca;
  marcaSelect.appendChild(option);
});

// MODELOS
marcaSelect.addEventListener("change", () => {
  modeloSelect.innerHTML = '<option value="">Modelo</option>';

  const modelos = carros.filter(c => c.marca === marcaSelect.value);

  modelos.forEach(carro => {
    const option = document.createElement("option");
    option.value = carro.modelo;
    option.textContent = carro.modelo;
    modeloSelect.appendChild(option);
  });
});

// ANOS
for (let ano = 2025; ano >= 1995; ano--) {
  const option = document.createElement("option");
  option.value = ano;
  option.textContent = ano;
  anoSelect.appendChild(option);
}

// BUSCA
window.buscarOleo = function () {
  const marca = marcaSelect.value;
  const modelo = modeloSelect.value;
  const resultado = document.getElementById("resultado");

  const carro = carros.find(c =>
    c.marca === marca &&
    c.modelo === modelo
  );

  if (carro) {
    resultado.style.display = "block";

    resultado.innerHTML = `
      <h3>${carro.marca} ${carro.modelo}</h3>
      <p><strong>Óleo:</strong> ${carro.oleo.join(", ")}</p>
      <p><strong>Capacidade:</strong> ${carro.capacidade}</p>
      <p><strong>Filtro de óleo:</strong> ${carro.filtroOleo}</p>
      <p><strong>Filtro de ar:</strong> ${carro.filtroAr}</p>
      <p><strong>Filtro de combustível:</strong> ${carro.filtroCombustivel}</p>
    `;
  } else {
    resultado.innerHTML = `<p>Veículo não encontrado.</p>`;
  }
};

});
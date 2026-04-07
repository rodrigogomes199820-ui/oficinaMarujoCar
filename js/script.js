


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
  // FIAT (AJUSTADO)
  { marca: "Fiat", modelo: "Uno", oleo: ["15W-40","20W-50"], capacidade: "3.0L", filtroOleo: "PSL55", filtroAr: "ARL4153", filtroCombustivel: "GI10" },
  { marca: "Fiat", modelo: "Palio", oleo: ["15W-40","10W-40"], capacidade: "3.2L", filtroOleo: "PSL55", filtroAr: "ARL4153", filtroCombustivel: "GI10" },
  { marca: "Fiat", modelo: "Strada", oleo: ["15W-40","10W-40"], capacidade: "3.5L", filtroOleo: "PSL55", filtroAr: "ARL4153", filtroCombustivel: "GI10" },
  { marca: "Fiat", modelo: "Mobi", oleo: ["0W-20"], capacidade: "3.0L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Fiat", modelo: "Argo", oleo: ["0W-20","5W-30"], capacidade: "3.6L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Fiat", modelo: "Cronos", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },

  // VOLKSWAGEN (ok)
  { marca: "Volkswagen", modelo: "Gol", oleo: ["5W-40","10W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Fox", oleo: ["5W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Polo", oleo: ["0W-20","5W-40"], capacidade: "3.6L", filtroOleo: "W712/95", filtroAr: "ARL4201", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Voyage", oleo: ["5W-40","10W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },
  { marca: "Volkswagen", modelo: "Saveiro", oleo: ["5W-40","10W-40"], capacidade: "3.5L", filtroOleo: "W712/52", filtroAr: "ARL4147", filtroCombustivel: "KL582" },

  // CHEVROLET (ajuste leve)
  { marca: "Chevrolet", modelo: "Celta", oleo: ["15W-40","10W-40"], capacidade: "3.0L", filtroOleo: "PSL619", filtroAr: "ARL4150", filtroCombustivel: "GI06" },
  { marca: "Chevrolet", modelo: "Corsa", oleo: ["15W-40","10W-40"], capacidade: "3.5L", filtroOleo: "PSL619", filtroAr: "ARL4150", filtroCombustivel: "GI06" },
  { marca: "Chevrolet", modelo: "Onix", oleo: ["0W-20"], capacidade: "3.5L", filtroOleo: "PSL639", filtroAr: "ARL4205", filtroCombustivel: "GI12" },
  { marca: "Chevrolet", modelo: "Prisma", oleo: ["5W-30"], capacidade: "3.5L", filtroOleo: "PSL619", filtroAr: "ARL4150", filtroCombustivel: "GI06" },
  { marca: "Chevrolet", modelo: "Classic", oleo: ["15W-40","20W-50"], capacidade: "3.5L", filtroOleo: "PSL619", filtroAr: "ARL4150", filtroCombustivel: "GI06" },

  // FORD (ok)
  { marca: "Ford", modelo: "Ka", oleo: ["5W-20"], capacidade: "3.3L", filtroOleo: "PSL655", filtroAr: "ARL4160", filtroCombustivel: "GI44" },
  { marca: "Ford", modelo: "Fiesta", oleo: ["5W-30"], capacidade: "3.5L", filtroOleo: "PSL655", filtroAr: "ARL4160", filtroCombustivel: "GI44" },
  { marca: "Ford", modelo: "Focus", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL960", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
  { marca: "Ford", modelo: "EcoSport", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL960", filtroAr: "ARL4170", filtroCombustivel: "GI44" },

  // HYUNDAI (ok)
  { marca: "Hyundai", modelo: "HB20", oleo: ["5W-30","0W-20"], capacidade: "3.3L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Hyundai", modelo: "HB20S", oleo: ["5W-30","0W-20"], capacidade: "3.3L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Hyundai", modelo: "Creta", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Hyundai", modelo: "Tucson", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL655", filtroAr: "ARL4170", filtroCombustivel: "GI44" },

  // resto mantido (já estava correto)
   // RENAULT
  { marca: "Renault", modelo: "Kwid", oleo: ["5W-30"], capacidade: "3.1L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Renault", modelo: "Sandero", oleo: ["5W-40"], capacidade: "4.0L", filtroOleo: "PSL55", filtroAr: "ARL4153", filtroCombustivel: "GI10" },
  { marca: "Renault", modelo: "Logan", oleo: ["5W-40"], capacidade: "4.0L", filtroOleo: "PSL55", filtroAr: "ARL4153", filtroCombustivel: "GI10" },
  { marca: "Renault", modelo: "Duster", oleo: ["5W-30"], capacidade: "4.5L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },

  // NISSAN
  { marca: "Nissan", modelo: "March", oleo: ["5W-30"], capacidade: "3.2L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Nissan", modelo: "Versa", oleo: ["5W-30"], capacidade: "3.5L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Nissan", modelo: "Kicks", oleo: ["0W-20"], capacidade: "3.8L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Nissan", modelo: "Sentra", oleo: ["5W-30"], capacidade: "4.2L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },

  // PEUGEOT
  { marca: "Peugeot", modelo: "206", oleo: ["10W-40"], capacidade: "3.5L", filtroOleo: "PSL55", filtroAr: "ARL4153", filtroCombustivel: "GI10" },
  { marca: "Peugeot", modelo: "207", oleo: ["10W-40"], capacidade: "3.5L", filtroOleo: "PSL55", filtroAr: "ARL4153", filtroCombustivel: "GI10" },
  { marca: "Peugeot", modelo: "208", oleo: ["5W-30","0W-30"], capacidade: "3.6L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Peugeot", modelo: "2008", oleo: ["5W-30"], capacidade: "3.8L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },

  // JEEP
  { marca: "Jeep", modelo: "Renegade", oleo: ["0W-20","5W-30"], capacidade: "4.0L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Jeep", modelo: "Compass", oleo: ["0W-20","5W-30"], capacidade: "4.2L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },

  // TOYOTA
  { marca: "Toyota", modelo: "Corolla", oleo: ["0W-20"], capacidade: "4.2L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
  { marca: "Toyota", modelo: "Etios", oleo: ["5W-30"], capacidade: "3.7L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Toyota", modelo: "Yaris", oleo: ["0W-20"], capacidade: "3.7L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Toyota", modelo: "Hilux", oleo: ["5W-30"], capacidade: "5.5L", filtroOleo: "PSL962", filtroAr: "ARL4170", filtroCombustivel: "GI44" },

  // HONDA
  { marca: "Honda", modelo: "Civic", oleo: ["0W-20"], capacidade: "4.2L", filtroOleo: "PSL127", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
  { marca: "Honda", modelo: "Fit", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL127", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Honda", modelo: "City", oleo: ["0W-20"], capacidade: "3.6L", filtroOleo: "PSL127", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
  { marca: "Honda", modelo: "HR-V", oleo: ["0W-20"], capacidade: "4.0L", filtroOleo: "PSL127", filtroAr: "ARL4170", filtroCombustivel: "GI44" },




  // MITSUBISHI
{ marca: "Mitsubishi", modelo: "Lancer", oleo: ["5W-30"], capacidade: "4.3L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
{ marca: "Mitsubishi", modelo: "ASX", oleo: ["5W-30"], capacidade: "4.3L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
{ marca: "Mitsubishi", modelo: "Outlander", oleo: ["5W-30"], capacidade: "4.5L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
{ marca: "Mitsubishi", modelo: "L200", oleo: ["15W-40"], capacidade: "6.5L", filtroOleo: "PSL962", filtroAr: "ARL4180", filtroCombustivel: "GI44" },

// KIA
{ marca: "Kia", modelo: "Picanto", oleo: ["5W-30"], capacidade: "3.2L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
{ marca: "Kia", modelo: "Cerato", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
{ marca: "Kia", modelo: "Sportage", oleo: ["5W-30"], capacidade: "4.5L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },

// CITROËN
{ marca: "Citroen", modelo: "C3", oleo: ["5W-30","10W-40"], capacidade: "3.5L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },
{ marca: "Citroen", modelo: "C4", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
{ marca: "Citroen", modelo: "Aircross", oleo: ["5W-30"], capacidade: "3.8L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" },

// BMW
{ marca: "BMW", modelo: "320i", oleo: ["5W-30","0W-30"], capacidade: "5.0L", filtroOleo: "HU816x", filtroAr: "ARLX123", filtroCombustivel: "KL66" },
{ marca: "BMW", modelo: "X1", oleo: ["5W-30"], capacidade: "5.2L", filtroOleo: "HU816x", filtroAr: "ARLX123", filtroCombustivel: "KL66" },
{ marca: "BMW", modelo: "X3", oleo: ["5W-30"], capacidade: "6.5L", filtroOleo: "HU925/4x", filtroAr: "ARLX200", filtroCombustivel: "KL66" },

// MERCEDES
{ marca: "Mercedes-Benz", modelo: "Classe A", oleo: ["5W-30"], capacidade: "5.0L", filtroOleo: "HU718/5x", filtroAr: "ARLX150", filtroCombustivel: "KL66" },
{ marca: "Mercedes-Benz", modelo: "C180", oleo: ["5W-30"], capacidade: "5.5L", filtroOleo: "HU718/5x", filtroAr: "ARLX150", filtroCombustivel: "KL66" },
{ marca: "Mercedes-Benz", modelo: "GLA200", oleo: ["5W-30"], capacidade: "5.5L", filtroOleo: "HU718/5x", filtroAr: "ARLX150", filtroCombustivel: "KL66" },

// AUDI
{ marca: "Audi", modelo: "A3", oleo: ["5W-40","0W-20"], capacidade: "4.6L", filtroOleo: "W712/95", filtroAr: "ARL4201", filtroCombustivel: "KL582" },
{ marca: "Audi", modelo: "A4", oleo: ["5W-40"], capacidade: "5.0L", filtroOleo: "W719/45", filtroAr: "ARL4201", filtroCombustivel: "KL582" },
{ marca: "Audi", modelo: "Q3", oleo: ["5W-40"], capacidade: "4.6L", filtroOleo: "W712/95", filtroAr: "ARL4201", filtroCombustivel: "KL582" },

// VOLVO
{ marca: "Volvo", modelo: "XC60", oleo: ["0W-20"], capacidade: "5.8L", filtroOleo: "HU8008z", filtroAr: "ARLX300", filtroCombustivel: "KL66" },
{ marca: "Volvo", modelo: "XC40", oleo: ["0W-20"], capacidade: "5.6L", filtroOleo: "HU8008z", filtroAr: "ARLX300", filtroCombustivel: "KL66" },

// SUZUKI
{ marca: "Suzuki", modelo: "Vitara", oleo: ["5W-30"], capacidade: "4.0L", filtroOleo: "PSL909", filtroAr: "ARL4170", filtroCombustivel: "GI44" },
{ marca: "Suzuki", modelo: "Jimny", oleo: ["5W-30"], capacidade: "3.5L", filtroOleo: "PSL639", filtroAr: "ARL4200", filtroCombustivel: "GI12" }
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
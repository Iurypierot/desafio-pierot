let nome = "Pierot";
let pontosDeZueira = 7500; 
let nivel = "";
let titulo = "";

// Definindo os níveis e títulos 
if (pontosDeZueira < 1000) {
  nivel = "Ferro";
  titulo = "Aprendiz das Gambiarras";
} else if (pontosDeZueira <= 2000) {
  nivel = "Bronze";
  titulo = "Cavaleiro do Wi-Fi Fraco";
} else if (pontosDeZueira <= 5000) {
  nivel = "Prata";
  titulo = "Guardião das Piadas Ruins";
} else if (pontosDeZueira <= 7000) {
  nivel = "Ouro";
  titulo = "Lendário Tomador de Café";
} else if (pontosDeZueira <= 8000) {
  nivel = "Platina";
  titulo = "Senhor das Gambiarras Elétricas";
} else if (pontosDeZueira <= 9000) {
  nivel = "Ascendente";
  titulo = "Dominador das Bananas Cósmicas";
} else if (pontosDeZueira <= 10000) {
  nivel = "Imortal";
  titulo = "Supremo Mestre do Meme";
} else {
  nivel = "Radiante";
  titulo = "Deus da Zueira Infinita";
}

console.log(` O Herói ${nome} acumulou ${pontosDeZueira} Pontos de Zueira!`);
console.log(` Está no nível ${nivel} - ${titulo}`);

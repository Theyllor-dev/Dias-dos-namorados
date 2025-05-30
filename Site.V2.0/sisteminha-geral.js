const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = data.toLocaleString('pt-BR', {
  month: 'long'
});
const ano = data.getFullYear();

const dataFormatada = `${dia} de ${mes.charAt(0).toUpperCase() + mes.slice(1)} de ${ano}`;
document.getElementById('data-formatada').textContent = dataFormatada;

document.addEventListener("DOMContentLoaded", () => {
    const name = typeof userName !== "undefined" ? userName : "alguém especial";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      `Uma declaração feita com carinho para ${name}. Leia com o coração, sinta cada palavra e descubra como é lindo amar de verdade.`
    );

    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      `Escrevi isso com o coração para ${name}. Um gesto simples, mas cheio de amor. Leia com carinho — você é a razão de tudo isso existir.`
    );  

    document.querySelector('meta[name="twitter:description"]')?.setAttribute(
      "content",
      `Uma página escrita com amor, dedicada a ${name}, que mudou minha vida. Um gesto sincero, simples e cheio de sentimento.`
    );
  });
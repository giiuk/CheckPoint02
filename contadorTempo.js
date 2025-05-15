let tempo = sessionStorage.getItem('tempo') || 0;
tempo = parseInt(tempo, 10);

const span = document.getElementById('contador');
const mensagem = document.getElementById('mensagem');
const reiniciarBotao = document.getElementById('reiniciar');

const intervalo = setInterval(() => {
  tempo++;
  span.textContent = tempo;
  sessionStorage.setItem('tempo', tempo);

  if (tempo > 10) {
    let p = document.getElementById('mensagem')
    p.innerHTML = "Você está ai? Sua sessão irá expirar em breve"
    p.style.color = 'red'
  }
}, 1000);

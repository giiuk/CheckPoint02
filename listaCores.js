const cores = [];

const coresConhecidas = {
  red: "#FF0000",
  green: "#008000",
  blue: "#0000FF",
  yellow: "#FFFF00",
  orange: "#FFA500",
  purple: "#800080",
  pink: "#FFC0CB",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#808080"
};

const input = document.getElementById('colorInput');
const lista = document.getElementById('colorList');

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const nomeCor = input.value.trim().toLowerCase();

    if (nomeCor) {
      const codigo = coresConhecidas[nomeCor] || '';
      cores.unshift({ nome: nomeCor, codigo });

      atualizarLista();

      input.value = '';
    }
  }
});

function atualizarLista() {
  lista.innerHTML = '';

  cores.forEach(cor => {
    const item = document.createElement('li');
    item.textContent = cor.nome;
    item.style.backgroundColor = cor.codigo || '#333';
    lista.appendChild(item);
  });
}
 
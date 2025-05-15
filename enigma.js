function analisarSequencia() {
  const n1 = parseInt(document.getElementById("n1").value);
  const n2 = parseInt(document.getElementById("n2").value);
  const n3 = parseInt(document.getElementById("n3").value);

  if (!n1 || !n2 || !n3 || n1 <= 0 || n2 <= 0 || n3 <= 0) {
    alert("Por favor, insira três números inteiros positivos.");
    return;
  }

  let padrao = "";
  let sequencia = [n1, n2, n3];

  const dif1 = n2 - n1;
  const dif2 = n3 - n2;
  const raz1 = n2 / n1;
  const raz2 = n3 / n2;

  if (dif1 === dif2) {
    padrao = "Progressão Aritmética";
    for (let i = 0; i < 5; i++) {
      const proximo = sequencia[sequencia.length - 1] + dif1;
      sequencia.push(proximo);
    }
  } else if (
    Number.isInteger(raz1) &&
    Number.isInteger(raz2) &&
    raz1 === raz2
  ) {
    padrao = "Progressão Geométrica";
    for (let i = 0; i < 5; i++) {
      const proximo = sequencia[sequencia.length - 1] * raz1;
      sequencia.push(proximo);
    }
  } else {
    padrao = "Padrão Personalizado";
    for (let i = 0; i < 5; i++) {
      const len = sequencia.length;
      const proximo = sequencia[len - 1] + sequencia[len - 2];
      sequencia.push(proximo);
    }
  }

  document.getElementById("padrao").innerText = `Padrão identificado: ${padrao}`;
  document.getElementById("sequencia").innerText = `Próximos 5 digitos da sequencia: ${sequencia.join(", ")}`;
}


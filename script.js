function somar(botao) {
  const somador = botao.parentElement;
  const n1 = parseFloat(somador.querySelector(".numero1").value);
  const n2 = parseFloat(somador.querySelector(".numero2").value);
  const resultadoElem = somador.querySelector(".resultado");

  if (isNaN(n1) || isNaN(n2)) {
    resultadoElem.textContent = "Números inválidos!";
    return;
  }

  const soma = n1 + n2;
  resultadoElem.textContent = `Resultado: ${soma}`;

  // Adiciona "soma" quantidade de novos somadores
  for (let i = 0; i < soma; i++) {
    adicionarSomador();
  }
}

function adicionarSomador() {
  const container = document.getElementById("somadores-container");

  const novoSomador = document.createElement("div");
  novoSomador.className = "somador";
  novoSomador.innerHTML = `
    <input type="number" placeholder="Número 1" class="numero1" />
    <input type="number" placeholder="Número 2" class="numero2" />
    <button onclick="somar(this)">Somar</button>
    <p class="resultado"></p>
  `;

  container.appendChild(novoSomador);
}

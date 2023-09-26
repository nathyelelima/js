// Função para ler os preços de 3 itens
function lerPrecos() {
    let precos = [];
  
    for (let i = 1; i <= 3; i++) {
      let preco = parseFloat(prompt(`Digite o preço do item ${i}:`));
      precos.push(preco);
    }
  
    return precos;
  }
  
  // Função para calcular a soma dos preços
  function calcularSoma(precos) {
    let soma = 0;
  
    for (let preco of precos) {
      soma += preco;
    }
  
    return soma;
  }
  
  // Função para imprimir a soma dos preços
  function imprimirSoma(soma) {
    console.log(`A soma dos preços dos itens é: ${soma.toFixed(2)}`);
  }
  
  // Chamar as funções
  const precos = lerPrecos();
  const soma = calcularSoma(precos);
  imprimirSoma(soma);
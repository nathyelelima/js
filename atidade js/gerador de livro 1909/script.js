document.addEventListener("DOMContentLoaded", function() {
  const gerarLivroBtn = document.getElementById("gerarLivro");
  const infoLivroDiv = document.getElementById("infoLivro");

  gerarLivroBtn.addEventListener("click", function() {
    // Obtenha os valores dos campos de entrada
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const paginas = document.getElementById("paginas").value;
    const pais = document.getElementById("pais").value;

    // Exiba as informações do livro no elemento infoLivroDiv
    infoLivroDiv.innerHTML = `
      <h2>Título do Livro: ${titulo}</h2>
      <h3>Nome do Autor: ${autor}</h3>
      <p>Número de Páginas: ${paginas}</p>
      <p>País de Lançamento: ${pais}</p>
    `;

    infoLivroDiv.style.display = "block";
  });
});

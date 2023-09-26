// Seleciona a div com id "principal"
const principal = document.getElementById('principal');

// Cria elementos HTML
const h1Element = document.createElement('h1');
const h2Element = document.createElement('h2');
const pElement = document.createElement('p');

// Adiciona texto aos elementos
h1Element.textContent = 'Bem vindo ao JS';
h2Element.textContent = 'Criando elementos de forma dinâmica';
pElement.textContent = 'Esse é um exemplo clássico de geração de HTML com Javascript';

// Adiciona classes aos elementos
h1Element.classList.add('tituloPrincipal');
h2Element.classList.add('tituloSec');
pElement.classList.add('texto');

// Adiciona os elementos como filhos da div principal
principal.appendChild(h1Element);
principal.appendChild(h2Element);
principal.appendChild(pElement);

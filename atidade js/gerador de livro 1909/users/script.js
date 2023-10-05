
const nomesMasculinos = ["Vinicios", "Gilberto", "Manoel", "Ryan"];
const nomesFemininos = ["Alice", "Nathyele", "Francyele", "Júlia", "Bruna"];
const profissoes = ["Engenheiro(a)", "Médico(a)", "Professor(a)", "Polícial", "Advogado(a)"];


function elementoAleatorio(arr) {
    const indiceAleatorio = Math.floor(Math.random() * arr.length);
    return arr[indiceAleatorio];
}


const fotoElement = document.getElementById('foto');
const nomeElement = document.getElementById('nome');
const profissaoElement = document.getElementById('profissao');

let nomeAleatorio, imagemAleatoria;


const sexoAleatorio = Math.floor(Math.random() * 2);

if (sexoAleatorio === 0) {
   
    nomeAleatorio = elementoAleatorio(nomesMasculinos);
    const imagensMasculinas = [
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",  
    "10.jpg"
        
    ];
    imagemAleatoria = elementoAleatorio(imagensMasculinas);
} else {
    
    nomeAleatorio = elementoAleatorio(nomesFemininos);
    const imagensFemininas = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg"
        
    ];
    imagemAleatoria = elementoAleatorio(imagensFemininas);
}


nomeElement.textContent = `Nome: ${nomeAleatorio}`;
profissaoElement.textContent = `Profissão: ${elementoAleatorio(profissoes)}`;
fotoElement.src = imagemAleatoria;

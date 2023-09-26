const alunos = [
    { nome: 'João', email: 'joao@gmail.com', materia: 'Matemática' },
    { nome: 'Maria', email: 'maria@gmail.com', materia: 'Português' },
    { nome: 'José', email: 'jose@gmail.com', materia: 'Matemática' }
];


function criarCardAluno(aluno) {
    const container = document.getElementById('principal');

    const card = document.createElement('div');
    card.classList.add('card');

    const nomeElement = document.createElement('h2');
    nomeElement.textContent = aluno.nome;

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${aluno.email}`;

    const materiaElement = document.createElement('p');
    materiaElement.textContent = `Matéria Favorita: ${aluno.materia}`;

    card.appendChild(nomeElement);
    card.appendChild(emailElement);
    card.appendChild(materiaElement);

    container.appendChild(card);
}


alunos.forEach(criarCardAluno); AnimationEffect
  
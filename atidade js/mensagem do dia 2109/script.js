document.addEventListener("DOMContentLoaded", function() {
    const mensagemInicial = document.getElementById("mensagemInicial");
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 6 && hora < 12) {
        mensagemInicial.textContent = "Bom dia!";
    } else if (hora === 12) {
        mensagemInicial.textContent = "Hora do Almoço!";
    } else if (hora >= 13 && hora <= 17) {
        mensagemInicial.textContent = "Boa tarde!";
    } else if (hora >= 18 && hora <= 23) {
        mensagemInicial.textContent = "Boa noite!";
    } else if (hora === 0) {
        mensagemInicial.textContent = "Não disse que ia dormir mais cedo hoje?";
    } else if (hora >= 1 && hora <= 5) {
        mensagemInicial.textContent = "Não está na Netflix, está?";
    }

    // Adicionar a data atual usando appendChild
    const dataAtual = document.createElement("div");
    dataAtual.textContent = `Hoje é dia ${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()}`;
    document.body.appendChild(dataAtual);
});

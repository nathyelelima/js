var operacao = prompt("Digite o número da operação desejada:\n1- Subtração\n2- Multiplicação\n3- Divisão\n4- Somatório");


operacao = parseInt(operacao);

switch (operacao) {
    case 1:
        // Subtração
        var num1 = parseFloat(prompt("Digite o primeiro número:"));
        var num2 = parseFloat(prompt("Digite o segundo número:"));
        var resultado = num1 - num2;
        alert("O resultado da subtração é: " + resultado);
        break;
    case 2:
        // Multiplicação
        var num1 = parseFloat(prompt("Digite o primeiro número:"));
        var num2 = parseFloat(prompt("Digite o segundo número:"));
        var resultado = num1 * num2;
        alert("O resultado da multiplicação é: " + resultado);
        break;
    case 3:
        // Divisão
        var num1 = parseFloat(prompt("Digite o primeiro número:"));
        var num2 = parseFloat(prompt("Digite o segundo número:"));
        
        if (num2 === 0) {
            alert("Erro: Divisão por zero não é permitida.");
        } else {
            var resultado = num1 / num2;
            alert("O resultado da divisão é: " + resultado);
        }
        break;
    case 4:
        // Somatório de 4 números
        var num1 = parseFloat(prompt("Digite o primeiro número:"));
        var num2 = parseFloat(prompt("Digite o segundo número:"));
        var num3 = parseFloat(prompt("Digite o terceiro número:"));
        var num4 = parseFloat(prompt("Digite o quarto número:"));
        var resultado = num1 + num2 + num3 + num4;
        alert("O resultado do somatório é: " + resultado);
        break;
    default:
        alert("Operação inválida. Por favor, escolha uma operação válida de 1 a 4.");
}
let dados = prompt("Quantos D6 deseja rolar?")

for(let x = 0; x < dados; x++){
    console.log(parseInt(Math.random()*(6 - 1) + 1))
}
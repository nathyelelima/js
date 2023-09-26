let notas = [7.0, 7.6, 6.0, 5.0, 8.3]
let maior = 0
let menor
let media = 0
let soma = 0

for(let x = 0; x < notas.length; x++ ){
    
    if(notas[x] > maior){
        maior = notas[x]
    }
}

for(let x = 0; x < notas.length; x++ ){
     
    if(x != 0){
    }else{
        menor = notas[0]
    } 
   

    if(notas[x] < menor){
        menor = notas[x]
    } 
    
}

for(let x = 0; x < notas.length; x++ ){

    soma += notas[x]

} 

media = soma / notas.length

console.log(menor)
console.log(maior)
console.log(media)
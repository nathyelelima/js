let altura = prompt ("Digite sua altura, ex: 1.70")
let peso = prompt ("Digite seu peso")

if(altura && peso != null){
    let imc
    imc = peso / (altura*altura)
    console.log()
    if(imc < 18.5){
        console.log("Abaixo do peso")
    }else if(imc > 18.6 && imc < 24.9){
        console.log("Peso ideal (Parabéns)")
    }else if(imc > 25 && imc < 29.9){
        console.log("Levemente acima do peso")
    }else if(imc > 30 && imc < 34.9){
        console.log("Obesidade grau I")
    }else if(imc > 35 && imc < 39.9){
        console.log("Obesidade grau II (severa)")
    }else if(imc > 40){
        console.log("Obesidade grau III (mórbida")
    }
}
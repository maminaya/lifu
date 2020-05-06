function rodar(){
    let number = inputNumber.value

    if (number % 2 == 0){
        result.innerHTML=`O número ${number} é par.`
    } else {
        result.innerHTML=`O número ${number} é impar.`
    }
}

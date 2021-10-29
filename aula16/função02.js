function soma(n1=0, n2=0){ //parâmetros prédefinido, caso não seja informado um dos parametros, será considerado o numero 0
    return n1+n2
}
console.log(soma(5,1))


function soma(n1, n2){ // sem parâmetros prédefinido   
    return n1+n2
}
console.log(soma(5))
//NaN -> nulo
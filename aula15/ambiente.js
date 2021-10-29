let valores =[8, 1, 7, 4, 2, 9]
console.log(valores)
/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)}
  ++++++   Codigo comentado tem a mesma função do codigo abaixo   ++++++++*/
for(let pos in valores){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}





let xxx = [7,3,1,5,4,2] // determinar os elementos da variável composta (xxx)
console.log(xxx.length) // let.length > qual o comprimento do array
xxx[9]=8 // let[valor]=posição
console.log(xxx) //***ver todos os valores em cada posição
xxx.push(6) //inserir o valor 6 na próxima posição
console.log(xxx)
console.log(xxx[3]) //retorna qual o elemento da chave(posição) 3
console.log(xxx.indexOf(1)) // retorna em qual chave(posição) está o elemento 1
xxx.sort() //ordenar os valores
console.log(xxx)

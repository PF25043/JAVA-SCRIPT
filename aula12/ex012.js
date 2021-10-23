
//PARA PEGAR A HORA ATUAL DO SERVIDOR                          
var agora = new Date()
var hora = agora.getHours()
//var hora = 2
console.log(`Agora são exatas ${hora} horas.`)
if(hora<12){
    console.log('Bom dia!')
} else if(hora<18){
    console.log('Boa tarde!')
    } else if(hora<24){
        console.log('boa noite')
    }else{
        console.log('Boa madrugada!')
    }




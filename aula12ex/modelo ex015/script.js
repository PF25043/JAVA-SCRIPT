function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'homemc.png')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'homemj.png')
            } else if (idade <50 ) {
                //adulto
                img.setAttribute('src', 'homem5.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemi.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulherc.png')
            } else if (idade<21){
                //jovem
                img.setAttribute('src', 'mulherj.png')
            } else if (idade <50 ) {
                //adulto
                img.setAttribute('src', 'mulher5.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulheri.png')
            }
        }
        res.style.textAlign = 'center' //usar o JS para centralizar ao invés do CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!<p>`
        res.appendChild(img)
    }
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[ERROR] Verifique os dados e tente novamente')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        /* Mesma coisa que colocar que colocar id no img do html */

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        /* if (fsex[0]. checked) >> se o que tiver marcado for fsex[0] é sinal de que ele é Maculino */
        
        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menino.pmg')

            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovH.pmg')

            }else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.pmg')

            } else {
                // idoso
                img.setAttribute('src', 'idoso.pmg')


            }



        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menina.pmg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovM.pmg')
            }else if ( idade < 50){
                //adulta
                img.setAttribute('src', 'adulta.pmg')
            } else {
                // idosa
                img.setAttribute('src', 'idosa.pmg')
            }




        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    

       


    }
}
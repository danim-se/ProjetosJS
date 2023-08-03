let amigo = {nome : 'Daniel', peso: 85.4 , sexo : 'M', 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

//chama variavel e função
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

//com obejetos podemos fazer diversas coisas em uma unica variavel

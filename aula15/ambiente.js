//Criar vetores: (primeiro índice é sempre 0)
let num = [1,3,5,7,4]

// para acrescentar um indice a um elemento: 
// num[6] = 6

//para acrscentar valores a uma array: 
//num.push(7,6,4)

//Para saber comprimento do array:
//num.length

//ordena em forma crescente os valores
//num.sort()



num.push(1)
num.sort()
console.log(num)
console.log(`Os números de vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[1]}`)
let pos = num.indexOf(4)
if(pos == -1 ){
    console.log('O valor não foi encontrado')
}else{
console.log(`O valor 4 esta na posição ${pos}`)
}
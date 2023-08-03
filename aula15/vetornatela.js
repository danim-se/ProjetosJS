let valores = [1,2,3,4,5]

/*Percuso de vetores

for(pos =0; pos <= valores.length; pos++){
 console.log(`A posição ${pos} tem  o valor de ${valores[pos]}`)
} */


// Codigo mais simples de percuso

for(let pos in valores ){
    console.log([pos])
}
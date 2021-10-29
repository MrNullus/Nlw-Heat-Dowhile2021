// While é uma função no javascript que executa um codigo quando for verdadeiro
//executa o codigo sem para ate que for falso ou pare ele

//While

/* let contador = 0
while (contador <= 5) {
  console.log(contador)
  ++contador
}

let contador2 = 0
while (contador2 < 5) {
  if (contador2 === 3) {
    break
  }
  console.log(contador2)
  ++contador2
}

let contador3 = 0
while (contador3 <= 100) {
  if (contador3 % 3 === 0 && contador3 % 5 === 0) {
    console.log(`${contador3} - Ping-Pong`)
  }
  if (contador3 % 3 === 0) {
    console.log(`${contador3} - Ping`)
  } else if (contador3 % 5 === 0) {
    console.log(`${contador3} - Pong`)
  } else {
    console.log(`${contador3} - Numero não divisivel por 3 e 5!`)
  }
  ++contador3
}
 */

//FOR

// for (let contador = 0; contador < 10; index++) {
//   console.log(contador)
// }

//Arrays

//Com incremento
let numerosAleatorios = [3, 6, 7, 8, 10, 43, 1]
for (let contador = 0; contador < numerosAleatorios.length; contador++) {
  console.log(`${contador} - ${numerosAleatorios[contador]}`)
}

//Com decremento
for (let i = numerosAleatorios.length - 1; i >= 0; i--) {
  console.log(`Posição ${i} com decremento: ${numerosAleatorios[i]}`)
}

//Contador lado de for

let i = 0
for (; i < numerosAleatorios.length; ) {
  console.log(`Sem valor inicial e incremento: ${numerosAleatorios[i]}`)
  i++
}

//Expressão Boleano

let condicao = true
let contador2 = 1

for (; condicao; ) {
  if (contador2 % 5 === 0) {
    condicao = false
  }
  console.log(`condição booleana simples: ${contador2}`)
  ++contador2
}

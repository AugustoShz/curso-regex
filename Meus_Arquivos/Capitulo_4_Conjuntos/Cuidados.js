const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g))

console.log(texto.match(/[A-z]/g)) // Tabela Unicode pega [ e ]

// console.log(texto.match(/[a-Z]/g)) // Retorna erro pois minusculos vem depois de maiusculos na tabela
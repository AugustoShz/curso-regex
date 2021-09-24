const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYX'
const texto3 = 'Os números: 0123456789.'

//0 ou 1
console.log('0 ou 1')
const regex = /fogo?/gi

console.log(texto1.match(regex))
console.log(texto2.match(regex))

//Um ou Mais
console.log('1 ou mais')
const regex2 = /fogo+/gi

console.log(texto1.match(regex2))
console.log(texto2.match(regex2))

console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))

//0 ou Mais
console.log('0 ou mais')
const regex3 = /fogo*/gi

console.log(texto1.match(regex3))
console.log(texto2.match(regex3))

// Chaves (n a m)
const texto4 = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

console.log(texto4.match(/\d{1,2}/g))
console.log(texto4.match(/[0-9]{2}/g))
console.log(texto4.match(/\d{1,}/g))

console.log(texto4.match(/\w{7}/g))
console.log(texto4.match(/[\wõ]{7,}/g))
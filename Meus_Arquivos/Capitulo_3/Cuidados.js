const textoUmaLinha = '...' // Aspas simples e duplas não aceitam multilinhas
const textoMultiLinha = `
  linha 1
  linha 2
`

// Cuidado ao utilizar tab (São considerados x espaços)
console.log(' '.match(/\s/g))
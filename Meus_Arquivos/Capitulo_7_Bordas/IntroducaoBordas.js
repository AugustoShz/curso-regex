const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ Inicio da linha/string
console.log(texto.match(/r$/gi)) // ? Fim da linha/string

console.log(texto.match(/^r.*r$/gis)) // Problema do dotall arrumado em JS com a flag s
console.log(texto.match(/^r[\s\S]*r$/gi)) // sem a flag s

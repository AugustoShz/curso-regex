const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) // Dentro de um conjunto, o grupo não existe
console.log(texto.match(/([abc])/gi)) // O contrario pode existir
console.log(texto.match(/(abc)/gi))
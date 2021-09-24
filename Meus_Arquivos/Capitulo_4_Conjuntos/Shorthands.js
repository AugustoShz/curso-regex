const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

console.log(texto.match(/\d/g)) // Apenas números
console.log(texto.match(/\D/g)) // Todos os não números

console.log(texto.match(/\w/g)) // Todos os caracteres de A-Z a-z 0-9 e _
console.log(texto.match(/[A-Za-z0-9_]/g)) // igual ao de cima

console.log(texto.match(/\W/g)) // Todos os não caracteres

console.log(texto.match(/\s/g)) // Caracteres em branco [ \t\n\r\f]
console.log(texto.match(/\S/g)) // Não brancos [^ \t\n\r\f]
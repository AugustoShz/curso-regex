const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Operadores gulosos, pega o máximo possível
console.log(texto.match(/<div>.+<\/div>/g)) // Guloso, pega o máximo possível
console.log(texto.match(/<div>.*<\/div>/g)) // Guloso, pega o máximo possível
console.log(texto.match(/<div>.{0,100}<\/div>/g)) // Guloso, pega o máximo possível

// Adicionando ? ele separa cada div transformando em um quantificador NÃO guloso (lazy)
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
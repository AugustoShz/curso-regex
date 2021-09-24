const texto = 'João é calmo, mas no transito fica nervoso.'
const texto2 = 'supermercado superação hiperMERCADO Mercado'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))

// Positive lookbehind
console.log(texto2.match(/(?<=super)[\wÀ-ú]+/gi))

// Negative lookbehind
console.log(texto2.match(/(?<!super)mercado+/gi))
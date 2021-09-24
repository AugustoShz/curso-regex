const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi))
console.log(texto1.match(/\w+dia\b/gi))
console.log(texto1.match(/\w+dia\w+/gi))
console.log(texto1.match(/\bdia\b/gi))

// Problema das bordas - bordas são não \w = [^A-Za-z0-9_]
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // A virgula vem junto
console.log(texto2.match(/([\wÀ-Ú-]*)?dia([\wÀ-Ú-]*)?/gi)) // A virgula vem junto
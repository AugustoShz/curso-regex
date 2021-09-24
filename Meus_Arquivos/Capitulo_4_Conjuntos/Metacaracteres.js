const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // Caracteres dentro do conjunto são, a maioria, considerados literais 
console.log(texto.match(/[+.?*$]./g)) // Caractere especial + qualquer caractere
console.log(texto.match(/[$-?]/g)) // - Considera um intervalo

console.log(texto.match(/[$\-?]/g)) // Com o \ agora - é considerado literal
console.log(texto.match(/[-$?]/g)) // Como - está no início, agora ele também é considerado literal

// Tomar cuidado com: - [ ] ^
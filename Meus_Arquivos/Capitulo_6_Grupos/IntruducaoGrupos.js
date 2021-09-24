const texto1 = 'O José Simão é muito engraçado... hehehehehe'

console.log(texto1.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag https://google.com.br'


console.log(texto2.match(/(https?:\/\/)?(\w*)?\.?\w+(\.\w+)+/g))
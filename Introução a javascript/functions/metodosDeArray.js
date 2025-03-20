

let techs = ['html', 'css' , 'js']

//adicionar um item no fim

techs.push('nodejs')

//adicionar elementos no começo

techs.unshift('sql')

//remover o item do final do array

techs.pop()

//remover do começo

techs.shift()

//pegar somente alguns elementos do array

console.log(techs.slice(1, 3));


//remover 1 ou mais itens em qualquer posição do array

techs.splice(1, 1)

//encontrar a posição do elemento no array

let index = techs.indexOf('css')
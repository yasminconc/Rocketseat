
//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
//Depois disso, transforme o arrayy em um texto e onde eram espaços, coloque "_"


let phrase = "Eu quero algo"
let myArray = phrase.split(" ")

let phraseWithUnderscore = myArray.join("_")

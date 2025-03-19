
//expressão new
//cria um novo objeto
//this keyword


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando '
    }
}

const yasmin = new Person("Yasmin")
const paulo = new Person("Paulo")

console.log(yasmin.walk());
console.log(paulo.walk());


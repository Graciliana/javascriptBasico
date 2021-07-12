var myName = "Graciliana";//string

let age = 32;//number

const height = 1.58;

null//nulo
undefined//não declarado

var isStudent = false;//boolean

//objeto, array e function

var person = {
    "name": "Graciliana",
    "age": 32
}

var isStudent = ["Graciliana", "Simara", "Joao"]

function sum(a, b) {
    return a + b
}

//operador typof
var isStudent = true;
console.log(typeof isStudent)

//operadores aritméticos
//adicao +
var sumTwoNumbers = 1 + 3;
console.log(sumTwoNumbers);
//subtração -
var subTwoNumbers = 9 - 3;
console.log(subTwoNumbers);

//multiplicaçao *
var mulTwoNumbers = 9 * 8;
console.log(mulTwoNumbers);

//divisao /
var divTwoNumbers = 4 / 2;
console.log(divTwoNumbers);

//módulo ou resto de uma divisao %
var divMTwoNumbers = 9 % 2;
console.log(divMTwoNumbers);

//incremento ++
var num = 1;
console.log(++num);
num = num + 1;
//decremento --
var num1 = 3;
console.log(--num1);
num1 = num1 - 1;

//operadores de atribuição
//=atribuição

//atribuição de soma
var x = 2
var y = 3

console.log(x += y)
console.log(x -= y)
console.log(x *= y)
console.log(x /= y)
console.log(x %= y)

//operadores de comparação

//== compara valores

//=== compara valores e tipos

//!= diferente
// <= ou <
//> ou <=


//operadores Lógicos 
// e &&
// ou ||
//!

//Estrutura condicionais
var num = 1;
num = 5;
if (num === 1) {
    console.log("num é igual a 1")
} else if (num === 2) {
    console.log("num é igual a 2")
} else {
    console.log("num é 5")
}

var mes = "janeiro"

switch (mes) {
    case "fevereiro":
        console.log("mes 2");
        break;

    case "Março":
        console.log("mes 3");
        break;

    case "janeiro":
        console.log("mes 1");
        break;
    default:
        console.log("nenhum dos casos acima atendido")
}

//estrutura de repetição
var colors = ["black", "white", "yellow","red"]

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for( var i = 1; i <= 10; i++){
    console.log(i);
}

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

var i = 1;

do {
    console.log(i);
    i++;
} while (i < 10);

//funçoes no javascript
function sayHello(name, lastName){
    console.log('hello ' + name + ' '+ lastName)
}

sayHello("Simara", "Conceição");

function sum(a,b){
    return a + b;
}

console.log(sum(40,93));

//classe e um pouco de orientação objeto
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    read(){
        return `Estou lendo ${this.title}`
    }
}

let book =  new Book('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book('Leonardo da Vinci', 'Walter Isaacson', 650);
console.log(book.read());
console.log(otherBook);
console.log(otherBook.read());
console.log(book, otherBook);

//herança
class ITBook extends Book {
    constructor(title, author, pages, technology ){
        super(title, author, pages);
        this.technology= technology;
    }
}
let itBook =  new ITBook('Algoritmos para viver', 'Brian', 500);

console.log(itBook);
console.log(itBook.author);

class Person {
    constructor(name) {
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }

}

let person = new Person('Simara');
person.name = 'Si'
console.log(person.name)
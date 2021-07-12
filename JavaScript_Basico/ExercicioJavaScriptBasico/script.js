//Algoritmo de FizzBuzz
//Divisivel por 3 => 'Fizz',
//Divisivel por 5 => 'Buzz',
//Divisivel por 3 e 5 => 'FizzBuzz',
//se não for um número => 'não é um numero'
//se não for divisivel nem por 3 e nem por 5 => Entrada


let resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if((entrada % 3 === 0 ) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if(entrada % 5 === 0)
        return 'Buzz';
    if(entrada % 3 === 0)
        return 'Fizz'; 
    
    return entrada;
} 

//Reverse a string
let newStr = '';

function reverseAString(str){
    for(let i = str.length -1; i >= 0; i--){
        newStr += str[i];
      //  console.log(newStr);
    }
    console.log(newStr);
}

let result = reverseAString('hello Gama Academy')

//Conversor Celsius to Fahrenheit

function convertToFahrenheit(value){
    return value * 1.8 + 32
}

let resultadoTemperatura = convertToFahrenheit(40)
console.log(`O valor em Fahrenheit é: ${resultadoTemperatura}`)
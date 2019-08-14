//se usa ; para saber hasta donde ejecutar el código, enjavascript no es necesario
// pero se debe utilizar ya que es una buena práctica de programación

var a = 3;

var nombre = 'Israel'; //se pyuede usar comilla doble o simple

var apellido = 'Perez';
var nombrecompleto = nombre + apellido;
console.log(nombrecompleto);
var nombrecompleto2 = ` ${nombre} ${apellido}`;
console.log(nombrecompleto2)
console.log('nombre de la primera forma ', nombrecompleto, 'nombre de la segunda forma', nombrecompleto2);

var bandera = true;
console.log('valor bandera: ', bandera);
bandera = 5;
console.log('valor bandera 2: ', bandera);

var arreglo = ['Israel', 1, true, ['xd', 3, false]]; // un arreglo puede contener cualquier mezcla de tipos de elementos
var objeto = {};

var indefinida = undefined; //no ocupa espacio de memoria
var nullvar = null; //ocupa espacio de memoria

console.log('nullvar es: ' + typeof (nullvar));
console.log('indefinida es: ' + typeof (indefinida));
var arreglo1 = [1];
var arreglo2 = arreglo1;
var x = [2, 'true', '2', 'a', undefined, false, false, 0, -1, 'A', 5, [], [], [], [], arreglo1];
var y = ['2', true, [2], 'A', null, null, undefined, false, false, ['A'], true, undefined, null, [], 0, arreglo2];


for (i = 0; i < x.length; i++) {
    if (x[i] == y[i]) {
        console.log(x[i], '=', y[i])
    } else {
        console.log(x[i], '!=', y[i])
    }
}
console.log('=========================Switch========================');
var salto = 'israel';
switch (salto) {
    case 'israel':
        console.log('Israel');
        break;

}
console.log('=========================Funciones========================');
//Funciones
console.log(suma(3, 5.6));

function suma(a, b) {
    return a + b;
}

//Funcion anonima

var sumar = (a, b) => a + b;

console.log(sumar(3, 4));

/*
function resta(a,b) {
    if (typeof(a)=='number' && typeof (b)=='number'){
        return a-b
    }
    else{
        return 'bad params'
    }

}
function div(a,b) {
    if (typeof(a)=='number' && typeof (b)=='number'){
        return a/b
    }
    else{
        return 'bad params'
    }

}
function mult(a,b) {
    if (typeof(a)=='number' && typeof (b)=='number'){
        return a*b
    }
    else{
        return 'bad params'
    }

}
*/
function resta(a, b) {

    return a - b
}

function mult(a, b) {

    return a * b
}

function div(a, b) {

    return a / b
}

console.log('suma: ', suma(null, ['a', 'b']));
console.log('resta: ', resta(null, 5));
console.log('division: ', div('2', ['2']));
console.log('multiplicacion', mult(4, 3));


// var no se debe usar nunca
// var es un alcance global
//let es un alcance dentro de un bloque
//const para garantizar que no se cambie nunca de valor

const arregloconst = [];// garantiza que arregloconst siempre va a ser un arreglo, pero se pueden añadir o eliminaar elementos
arregloconst.push(3)
// arregloconst=3; Esto da error


console.log('=========================Callbacks========================');

//CALLBACKS
function calculadora(callback, a, b) {
    return callback(a, b)

}

console.log(calculadora(sumar, 4, 5));
console.log(calculadora(div, 4, 5));

function execFunciones(callback) {
    return callback('Israel')
}

var res = (funcion, a, b) => funcion(a, b);

console.log(res(sumar, 4, 7))

function saludar(nombre) {
    return 'Hola ' + nombre;
}

function despedirse(nombre) {
    return 'Adios ' + nombre;
}

console.log(execFunciones(saludar));
console.log(execFunciones(despedirse));
console.log('=========================Fat arrow ========================');
//fat arrow
var sum = (a, b) => a + b;

console.log(sum(5, 6));

console.log('=========================Objetos ========================');

const persona = {

    nombre: 'Israel',
    apellido: 'Perez',
    direccion:
        [{
            calleprincipal: '10 de agosto',
            callesecundaria: 'mariana'
        }]
}
console.log(persona);
console.log('apellido de la persona: ', persona.apellido)

persona.apellido = 'Espinosa'
//otra forma de acceder a las propiedades personas['nombre'] sin el punto!!!!!!
console.log('apellido de la persona: ', persona.apellido)


console.log('=========================Diccionario ========================');
const calc = {
    basic: {
        add: (a, b) => a + b,
        rest: (a, b) => a - b,
        multiplication: (a, b) => a * b,
        division: (a, b) => a / b,
    },
    complex: {
        potencia: (a, b) => math.pow(a, b)
    }
}


calc.nuevoatributo = 5;
console.log(calc);

var exeCalc = (func, a, b) => func(a, b);

console.log(exeCalc(calc.basic.add, 6, 10))

console.log('calcu completa ',calc);

const basic=calc.basic;
console.log('calcu basica ',basic);

const complex= calc.complex;
console.log('calcul solo compleja ',complex);

//clonar un objeto para perder la referencia y poder trabajar como onbjetos independientes
const operacionesBasicas= Object.assign({},calc);
let operacionesAvanzadas= JSON.stringify(operacionesBasicas);
operacionesAvanzadas=JSON.parse(operacionesAvanzadas);
//no copia funciones se las debería guardar como callbacks
console.log('object keys:', Object.keys(operacionesAvanzadas));
// devuelve los atributos de un objeto






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

var x = [2, 'true', '2', 'a', undefined, false, false, 0, -1, 'A', 5,[],[],[]];
var y = ['2', true, [2], 'A', null, null, undefined, false, false, ['A'], true,undefined,null,[]];


for (i = 0; i < x.length; i++) {
    if (x[i] == y[i]) {
        console.log(x[i], '=', y[i])
    } else {
        console.log(x[i], '!=', y[i])
    }
}
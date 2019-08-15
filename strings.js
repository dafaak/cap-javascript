const nombre = 'Israel';
const nombreCompleto = 'Israel Perez';

//longitud de unstring

console.log('longitud del nombre completo: ', nombreCompleto.length);
console.log('longitud del nombre : ', nombre.length);

// encontrar una letra en un texto

console.log('Comienza en :', nombreCompleto.indexOf('P'));

//Sirve para buscar indices en strings de longitud grande
console.log('usando regex comienza en :', nombreCompleto.search(/z/));

// concatenar 2 strings
console.log(nombre.concat(nombreCompleto));

//trim() permite eleiminar los espacios en blanco al inicial o al final
let libro = '  los gatos de ulthar  '
console.log('*', libro, '*');
console.log('*', libro.trim(), '*');

//
const posicionLetra = nombreCompleto.indexOf('P');

console.log(nombreCompleto.charAt(posicionLetra));

//slice
const letraInicial = nombreCompleto.indexOf('P');
const letraFinal = nombreCompleto.indexOf('z');
console.log('inicial: ',letraInicial,'final: ',letraFinal)
console.log('slice: ',nombreCompleto.slice(letraInicial, letraFinal));

//clonar strings con slice

const clonNombreCompleto= nombreCompleto.slice(0,nombreCompleto.length);

console.log('clon nombre completo: ',clonNombreCompleto);

//split: divide un string segun el separador que se defina, si se pone '' divide el string en letras
// tambien sirve para clonar pero es mejor usar el slice!!
console.log('split: ', nombreCompleto.split(''));
console.log('split: ', nombreCompleto.split(' '));

// la diferencia entre slice y substring es que
const apellido= nombreCompleto.substring(letraInicial,letraFinal);
console.log('substring:',apellido);

//replace no cambia al arreglo original, se puede busca por palabras exactas o expreciones regulares,
// además se puede usar regex
console.log('Nombre completo reemplazado: ',nombreCompleto.replace('Israel','Jose'))
console.log('Nombre completo original: ',nombreCompleto)


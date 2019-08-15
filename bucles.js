let numero = 1;


console.log('==========================ascendente===================')
while (numero <= 20) {
    console.log(numero);
    numero++;

}

console.log('==========================descendente===================')
numero--;

do {
    console.log(numero);
    numero--;
}
while (numero > 0);


//bucles de iteración

const arregloNumeros = [1, 2, 3, 4, 5, 6, 7];
const arregloLetras = ['a', 'b', 'c'];
arregloNumerosLetras = []


console.log('longitud del  arreglo de numeros: ', arregloNumeros.length);
//insertar y eliminar elementos
console.log(arregloNumeros);
arregloNumeros.push(8);//inserta al final
arregloNumeros.unshift(0)//inserta al inicio
console.log(arregloNumeros);
console.log('el indice del numero 6 es:', arregloNumeros.indexOf(6));
console.log('el indice del numero 10 es:', arregloNumeros.indexOf(10));
// se puden insertar elementos en cualquier posicion ,
// y al imprimir se muestran los espacios vacios antes del elelemtno
arregloNumeros[13] = 14;
console.log(arregloNumeros);

//quitar elementos
console.log('pop', arregloNumeros.pop());
console.log('splice: ', arregloNumeros.splice(9, 4));
console.log('arreglo modificado: ', arregloNumeros);


console.log('slice: ', arregloNumeros.slice(1, 2));
// como clonar un arreglo
//slice y splice

console.log('arreglo: ', arregloNumeros)

let arreglo = (arregloin, numEliminar) => {
    indice = arregloin.indexOf(numEliminar);
    esIndiceNegativo = indice < 0;
    return (esIndiceNegativo) ? arregloin : arregloin.splice(indice, 1);

};

arreglo(arregloNumeros,);
console.log('resultado: ', arregloNumeros);

//iteradores
arregloNumeros.forEach((value, index, array) => value + 1);
console.log('numeros mayores que 4: ', arregloNumeros);

//map devuelve un arreglo
const arregloItemParMasDiez = arregloNumeros
    .map(
        (value, index) => {
            if (index % 2 === 0) {
                value += 10
            }
            return value;
        }
    );
console.log('arreglo item par mas 10: ', arregloItemParMasDiez);

//every

const every = arregloNumeros.every(
    value => {
        return typeof (value) === 'number'
    }
)

console.log('every', every);

//filter devuelve los elementos que cumplen la condicion
const elementosFiltrados = arregloNumeros.filter(
    value => {
        return value > 5
    }
)

console.log('elementos filtrados:', elementosFiltrados);

// Find devuelve el valor si se los encuentra
const valorEncontrado = arregloNumeros.find(
    value => {
        return value === 4
    }
);

console.log('valor encontrado: ', valorEncontrado);

//some almenos un elemento debe cumplir la condicion apra devolver true

const arregloSome = arregloNumeros.some(
    value => {
        return value > 7
    }
);

console.log('arreglo some: ', arregloSome);

//reduce
//cuenta con un acumulador
const arregloReduce = arregloNumeros.reduce(
    (acumulador, valor) => {
    return acumulador- valor;
        }
    , 50 //este es el valor inicial del acumulador
);
console.log(arregloNumeros);
console.log(arregloReduce);

const personas= [
    {
        nombre: 'israel',
        apellido: 'perez',
        ciudad: 'uio'
    },
    {
        nombre: 'jose',
        apellido: 'espinosa',
        ciudad: 'amb'
    },
    {
        nombre:'Jorge',
        apellido: 'reyes',
        ciudad: 'uio'
    }

];

const personasReduce = personas.reduce((acumulador,valor)=>{
    console.log(acumulador);
    const esDeQuito=valor.ciudad==='uio';
    if(esDeQuito){
        acumulador.push(valor)
    }
    return acumulador;
},[])
    .map(
        value => {value.ciudad='Quito'
        return value}
    )

console.log(personasReduce);

//personas mayores de 20

//nuevo arrego de personas con el nombre apellido y color de ojos
//about tomar solo las 10 primeras palabras y cuantos caracteres tenia
//cuantos amigos tiene cada uno
//a cuantos les gusta la apple, la banana y la strawberry
//cuantos usuarios son originalmente
//arreglo de usuarios activos e inactivos
// cuantos de 20 a 30 y cuales son de 30a 40 y cuales son
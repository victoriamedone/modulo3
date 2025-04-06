// Consigna: Crea una función llamada sumarTodos que acepte una cantidad
// indefinida de números y devuelva su suma. Luego, llama a la función con varios
// números y muestra el resultado en la consola.

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, num) => total + num, 0);
};

console.log("La suma de los numeros ingresados es:", sumarTodos(3.14 , 1.6 , 7 , 9.78 , 23))

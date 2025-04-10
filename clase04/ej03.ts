// Crea una función genérica que tome un parámetro de cualquier tipo y lo
// devuelva. Prueba la función con diferentes tipos de datos

function funcionGenerica<T>(argumento : T): T{
    return argumento
}

console.log(funcionGenerica("Victoria"));
console.log(funcionGenerica(36));
console.log(funcionGenerica(true));
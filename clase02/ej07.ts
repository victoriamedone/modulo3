// Consigna: Crea una función llamada aumentarSalario que acepte un objeto
// empleado con las propiedades nombre (string) y salario (number), y un número
// que represente el porcentaje de aumento. La función debe aumentar el salario
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado.

let empleado: {
    nombre: string,
    salario: number,
    metodo: () => any
    } = {
    nombre: "Lucas Di Dio",
    salario: 1000000,
    metodo: function() {
    let nuevoSalario = this.salario + (this.salario * 25 / 100)  
    return nuevoSalario;
    }

    };

console.log("Se le otorga al empleado", empleado.nombre , "un aumento del 25% sobre su sueldo de", empleado.salario,".");
console.log("Su nuevo salario es: ", empleado.metodo() );
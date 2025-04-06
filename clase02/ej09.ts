// Consigna: Crea un objeto llamado coche con las propiedades marca, modelo, y
// encendido (booleano). Define una función encenderCoche que acepte el objeto
// coche y cambie el valor de encendido a true. Muestra el estado del coche en la
// consola antes y después de llamar a la función.

let coche: {
    marca: string,
    modelo: string,
    encendido: boolean,
    encenderCoche: () => any
    } = {
    marca: "Ford",
    modelo: "Ka",
    encendido: false,
    encenderCoche: function() {
            let cocheEncendido = this.encendido = true 
            return cocheEncendido
            }

};

console.log([coche.marca, coche.modelo, coche.encendido]);
console.log("Vamos a encender el coche!")
console.log([coche.marca, coche.modelo, coche.encenderCoche()]);


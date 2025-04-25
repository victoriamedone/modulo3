/**1. Define una clase Coche con propiedades marca, modelo (públicas) y
precio (privada).
2. Implementa un método para mostrar la información del coche que acceda
a las propiedades públicas y no a la privada directamente.
*/

class Coche {
    public marca :string
    public modelo: string
    private precio: number

    constructor(marca:string, modelo:string, precio: number){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }

    //Para llamar a las propiedades públicas
    información(){
        console.log(`El auto modelo ${this.modelo}, de la marca ${this.marca}`)
    }

    //Para llamar a la privada
    getPrecio(): number {
        return this.precio;
    }
}

let coche1 = new Coche("Ford", "Ka", 50000000)

coche1.información()
console.log("El precio del modelo es: ", coche1.getPrecio())
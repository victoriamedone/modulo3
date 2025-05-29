/**1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. Esta clase debe tener
propiedades privadas para marca, modelo, año, y kilometraje. Implementa
métodos para encender el coche y realizar un viaje, que incrementen el
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta
establecer un año o kilometraje no válido, imprime un mensaje indicando el
error. */

class Coche {
    private _marca: string
    private _modelo : string
    private _anio: number = 0
    private _kilometraje: number = 0
    kmViaje: number
    

    constructor(_marca : string, _modelo: string, _anio : number, _kilometraje:number, kmViaje: number){
        this._marca = _marca
        this._modelo = _modelo
        this.anio = _anio
        this.kilometros = _kilometraje;
        this.kmViaje = kmViaje
    }

    public set anio(value: number){
        if(value > 1886){
           this._anio = value
        }else{
            console.log(`Este año no es valido`)
            
        }
    }

    public set kilometros(value: number){
        if(value > 0){
            this._kilometraje= value
        }else{
            console.log(`Este kilometraje no es valido`)
            
        }
    }


    private datosValidos(): boolean {
        return this._anio >= 1886 && this._kilometraje >= 0
    }

    encenderCoche(): void {
        if (!this.datosValidos()) {
            console.log(`No se puede encender el coche debido a datos inválidos.`)
            return
        }
        console.log(`Encendiendo el motor...`)
        console.log(`Estos son los datos actuales del vehículo:`)
        console.log(`Marca: ${this._marca}, Modelo: ${this._modelo}, Año: ${this._anio}, Kilometraje: ${this._kilometraje}`)
    }

    realizarViaje(): void {
        if (!this.datosValidos()) {
            console.log(`No se puede realizar el viaje debido a datos inválidos.`)
            return
        }
        let nuevoKilometraje = this._kilometraje + this.kmViaje
        console.log(`El viaje ha sido realizado, éstos son los datos actuales del vehículo:`)
        console.log(`Marca: ${this._marca}, Modelo: ${this._modelo}, Año: ${this._anio}, Kilometraje: ${nuevoKilometraje}`)
    }
}

let car = new Coche("Ford", "Ka", 2018, 2003, 50000)
car.encenderCoche()
car.realizarViaje()

/**Crea una clase Avion con propiedades privadas para el modelo, capacidad y
velocidad. Implementa getters y setters para cada propiedad, asegurándote de
validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
Nota sobre la inicialización de propiedades
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las
propiedades _capacidad y _velocidad. Esto se hace para evitar un error de
TypeScript que indica que estas propiedades no estaban inicializadas en el
constructor. Este enfoque asegura que las propiedades serán asignadas
adecuadamente en el constructor mediante el uso de los setters, manteniendo
así la validación de los valores. Tener esto en cuenta para los demás ejercicios. */

class Avion{
    private _modelo: string
    private _capacidad!: number
    private _velocidad!: number 

    constructor(modelo: string, capacidad: number, velocidad: number){
        this._modelo = modelo
        this.capacidad = capacidad
        this.velocidad = velocidad
    }

    //Modelo
    public get modelo(): string {
        return this._modelo
    }

    public set modelo(value: string) {
        this._modelo = value
    }

    //Capacidad
    public get capacidad():number {
        return this._capacidad
    }

    public set capacidad(value: number) {
        if (value >= 0) {
            this._capacidad = value
        } else {
            console.log(`La capacidad no puede ser menor que 0.`)
        }
    }

    //Velocidad
    public get velocidad(): number{
        return this._velocidad
    }

    public set velocidad(value: number) {
        if (value >= 0) {
            this._velocidad = value
        } else {
            console.log(`La velocidad no puede ser negativa.`)
        }
    }

    private datosValidos(): boolean {
        return this.capacidad > 0 && this.velocidad >= 0
    }

    verInformación(){
        if(!this.datosValidos()){
            console.log(`No se puede iniciar el vuelo con el modelo ${this.modelo} por datos erroneos`)
        }else{
            console.log(`El avión modelo ${this.modelo} tiene capacidad para ${this.capacidad} personas y vuela a ${this.velocidad} km/h`)
        }
    }

}


console.log(`Primer avión: `)
let avion1 = new Avion("Boeing 767", 100, 300)
avion1.verInformación()

console.log(`Segundo avión: `)
let avion2 = new Avion("Hercules", 4, -400)
avion2.verInformación()


/**Desarrolla una clase Vacacion que tenga propiedades privadas para destino,
duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de
que duracion no sea menor que 1 y presupuesto sea mayor que 0. */

class Vacacion{
    private _destino : string
    private _duracion! : number
    private _presupuesto! : number

    constructor(destino: string, duracion: number, presupuesto: number){
        this._destino = destino
        this.duracion = duracion
        this.presupuesto = presupuesto
    }

    public get destino(): string{
        return this._destino
    }

    public set destino(value:string){
        this.destino = value
    }

    public get duracion():number {
        return this._duracion
    }

    public set duracion(value: number) {
        if (value >= 1) {
            this._duracion = value
        } else {
            console.log(`La duración no puede ser menor a 1 dia.`)
        }
    }

    public get presupuesto():number {
        return this._presupuesto
    }

    public set presupuesto(value: number) {
        if (value >= 0) {
            this._presupuesto = value
        } else {
            console.log(`El presupuesto debe ser mayor a $0`)
        }
    }

    info(){
        console.log(`Las vacaciones a ${this._destino} durarán ${this.duracion} días y tienen un presupuesto de $${this.presupuesto}`)
    }
}

const vacaciones = new Vacacion("Japón", 15, 500000); 
vacaciones.info()
vacaciones.duracion = 0; 
vacaciones.presupuesto = -10; 
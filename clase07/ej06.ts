// Crea una clase Producto que contenga propiedades privadas como nombre,
// precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea
// negativo y que cantidad no sea menor que 0.

class Producto{
    private _name: string
    private _price!: number
    private _amount!: number

    constructor(name: string, price: number, amount: number){
        this._name = name
        this.price = price
        this.amount = amount
    }

    public get name():string{
        return this._name
    }

    public set name(value:string){
        this._name = value
    }

    public get price():number{
        return this._price
    }

    public set price(value: number) {
        if (value > 0) {
            this._price = value
        } else {
            console.log(`El precio no puede ser menor a $0.`)
        }
    }
    public get amount():number{
        return this._amount
    }

    public set amount(value: number) {
        if (value >= 0) {
            this._amount = value
        } else {
            console.log(`La cantidad no puede ser menor que 0`)
        }
    }

    info(){
        console.log(`El producto ${this._name} vale $${this._price} y tenemos ${this.amount} unidades en stock.`)

    }
}

const papitas = new Producto("Quento Crema y Cebolla", 900, 600)
papitas.info()

const galletitas = new Producto("Pepitos", 1100, -3)

/**Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser
modificado a través de un método depositar y otro retirar, los cuales deben
validar que la cantidad no sea negativa. Implementa métodos públicos para
consultar el saldo */

class Banco{
    private _saldo : number
 
    constructor(saldo:number){
        this._saldo = saldo
    }

    public get saldo():number{
        return this.saldo
    }

    public set saldo(value:number){
        this._saldo = value
    }

    depositar(monto:number):void{
        if (monto >= 0){
            this._saldo = this._saldo + monto
            console.log(`Monto depositado, saldo actual: $${this._saldo}`)
        }else{
            console.log(`El monto a depositar debe ser mayor a $0`)
        }


    }

    retirar(monto: number):void{
        if (monto >= 0){
            this._saldo = this._saldo - monto
            console.log(`Monto retirado, saldo actual: $${this._saldo}`)
        }else{
            console.log(`El monto a retirar debe ser mayor a $0`)
        }

    }

}

let banco = new Banco(100000)
banco.depositar(30000)
banco.retirar(30000)
banco.retirar(30000)
banco.depositar(30000)
banco.retirar(-3)
banco.depositar(-5)


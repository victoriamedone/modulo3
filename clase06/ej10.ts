/**Crea una interfaz PagoOnline con un método procesarPago().
Crea una clase abstracta Pago con un método concreto validarMonto() y un
método abstracto completarPago().
Implementa ambas estructuras en una clase concreta PagoConTarjeta. */

interface PagoOnline{

    procesarPago(): void

}

abstract class Pago implements PagoOnline{

    monto: number; 

    constructor(monto: number){
        this.monto = monto
    }

    validarMonto(){
        console.log(`Validando el monto`)

    }

    procesarPago(): void {
        
    }

    abstract completarPago():void

}



class PagoConTarjeta extends Pago implements PagoOnline{
    procesarPago(): void {
        console.log("Su pago esta siendo procesado");
    }
    validarMonto(): void {
        console.log(`Confirmando el pago efectuado: ${this.monto}`);
        
    }
    completarPago(): void {
        console.log("Gracias por su compra");
        
    }
} 

const nuevaCompra = new PagoConTarjeta(30000)
nuevaCompra.procesarPago(); 
nuevaCompra.validarMonto(); 
nuevaCompra.completarPago()
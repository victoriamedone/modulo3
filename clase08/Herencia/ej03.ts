/*Desarrolla un sistema para una tienda en línea. Crea una clase base 
Producto que tenga propiedades como nombre, precio, y un método 
detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas 
deben sobrescribir el método detallesProducto() con información más 
específica. 
Crea una interfaz Envio que defina el método calcularEnvio(). La clase 
Electronico debe implementar esta interfaz y el cálculo del envío será un 10% 
del precio del producto.*/

interface Envio{
    calcularEnvio():void
}

export class Producto{
    nombre: string; 
    precio: number; 

    constructor(nombre: string, precio: number){
        this.nombre = nombre; 
        this.precio = precio
    }

    detallesProducto():void{
        console.log(`El producto: ${this.nombre}, vale $${this.precio}`);
        
    }
}

class Electronico extends Producto implements Envio{
    constructor(nombre: string, precio: number, public garantiaAnios: number){
        super(nombre, precio)
    }

    detallesProducto(): void {
        console.log(`El producto: ${this.nombre}, vale $${this.precio} y tiene una garantia de ${this.garantiaAnios} años`);
        
    }

    calcularEnvio(): void {
        const envio = this.precio + (this.precio*0,10)
        console.log(`El precio final del producto con el envio es: $${envio} `);
        
    }
}

class Ropa extends Producto{
    constructor(nombre: string, precio: number, public talle: string){
        super(nombre, precio)
    }

    detallesProducto(): void {
        console.log(`La prenda: ${this.nombre}, vale $${this.precio} y viene en talle ${this.talle}`);
        
    }
}




const micro = new Electronico("microondas", 90000, 6);
micro.detallesProducto();  
micro.calcularEnvio(); 
const remera = new Ropa("Musculosa", 10000, "Small"); 
remera.detallesProducto(); 
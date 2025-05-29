/**Crea un sistema que gestione productos y órdenes de compra. Usa una clase
abstracta Producto, clases concretas Electrónico y Alimento, y una clase
OrdenCompra que contenga múltiples productos. */

abstract class Producto{
    nombreProducto: string
    precio: number

    constructor(nombreProducto: string, precio: number){
    this.nombreProducto = nombreProducto 
    this.precio = precio
    }
       
       abstract describir():string
}


class Electronico extends Producto{
    constructor(nombreProducto: string, precio: number){
        super(nombreProducto, precio)
    }

    describir(): string {
        return`El producto electronico: ${this.nombreProducto}, cuesta: $${this.precio}`;
        
    }
}

class Alimento extends Producto{
    constructor(nombreProducto: string, precio: number){
        super(nombreProducto, precio)
    }

    describir(): string {
        return `El producto alimenticio: ${this.nombreProducto}, cuesta: $${this.precio}`
        
    }
}

class OrdenCompra{

   productos: Producto[] = [] 
    
    agregarProducto (producto: Producto):void{
        this.productos.push(producto) 
    }

    listarOrdenDeCompra():void{
        console.log(`Resumen de la Orden de Compra: `)
        this.productos.forEach(p=>{
            console.log(p.describir())
        })
    }
}

const cafetera = new Electronico("Cafetera", 10000)  
const fideos = new Alimento("Fideos", 1500) 


const ordenDeCompra = new OrdenCompra() 
ordenDeCompra.agregarProducto(cafetera) 
ordenDeCompra.agregarProducto(fideos)
ordenDeCompra.listarOrdenDeCompra()
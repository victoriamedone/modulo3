/**Consigna: Crea una clase base Compania con un atributo privado
nombreCompania y un atributo protegido ingresosAnuales. Crea una clase
derivada EmpresaTecnologia que use el atributo protegido y agregue un
método que calcule el doble de los ingresos anuales. */

class Compania{
    private nombreCompania: string
    protected ingresosAnuales : number

    constructor(nombreCompania:string, ingresosAnuales: number){
        this.nombreCompania = nombreCompania
        this.ingresosAnuales = ingresosAnuales
    }

    getIngresos(){
        console.log(`Los ingresos anuales son: ${this.ingresosAnuales}`)
        return this.ingresosAnuales
        
    }

}

class EmpresaTecnologia extends Compania{

    doblarIngresos(): void {
        let dobleIngreso = (this.ingresosAnuales * 2)
        console.log(`Los ingresos anuales son: ${this.ingresosAnuales}`)
        console.log(`Si duplicamos los ingresos anuales el monto sería: ${dobleIngreso}`)

    }
}

let empresa1 = new Compania("Stay Inc",30000000)
let tech1 = new EmpresaTecnologia("Motorola",10000000)

console.log(`----- Empresa -----`)
empresa1.getIngresos()
console.log(`----- Empresa Tecnológica -----`)
tech1.doblarIngresos()
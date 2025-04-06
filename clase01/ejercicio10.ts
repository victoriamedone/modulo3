// Declara un objeto en TypeScript con propiedades de tipo string, number y
// boolean. Accede a estas propiedades e imprímelas en la consola.
interface MiObjeto{
    nombre : string;
    edad: number;
    activo : boolean
}

const persona: MiObjeto = {
    nombre: "Enzo Pérez",
    edad: 37,
    activo: true
};

console.log(`Nombre: ${persona.nombre}`);       
console.log(`Edad: ${persona.edad}`);           
console.log(`Activo: ${persona.activo}`);     


console.log("Objeto completo:", persona);
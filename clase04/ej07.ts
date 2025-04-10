// Crea una función genérica llamada procesarObjeto que reciba un objeto
// genérico y:
// 1. Use un bucle for...in para recorrer sus propiedades.
// 2. Si el valor de una propiedad es una cadena de texto (string), conviértelo a
// minúsculas.
// 3. Si es un número (number), elévalo al cuadrado.
// 4. Si es un booleano, invierte su valor.
// Usa aserciones de tipo para realizar las transformaciones.

function procesarObjeto<T>(objeto : T): void {
    for (const propiedad in objeto) {
        if (Object.prototype.hasOwnProperty.call(objeto, propiedad)) {
          const valor = objeto[propiedad as keyof T];
          
          if (typeof valor === 'string') {
            console.log((valor as string).toLowerCase());
          } else if (typeof valor === 'number') {
            console.log((valor as number) ** 2);
          } else if (typeof valor === 'boolean') {
            console.log(!(valor as boolean));
          }
        }
      }

}

const datosMixtos = {
    nombre: "Victoria",
    edad: 25,
    esVerdad: true
  };
  
  procesarObjeto(datosMixtos);
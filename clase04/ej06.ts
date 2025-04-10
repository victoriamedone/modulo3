// Crea una función genérica llamada filtrarElementos que reciba un arreglo de
// valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
// filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
// tipo para acceder a las propiedades específicas de string.

function filtrarElementos<T>(arreglo: T[]): string[] {
    const resultados: string[] = [];
    
    for (const elemento of arreglo) {
      if (typeof elemento === 'string') {
        resultados.push((elemento as string).toUpperCase());
      }
    }
    
    return resultados;
  }
  
  const valoresMixtos: (number | string | boolean)[] = ["hola", true, "typescript", false];
  const filtrados = filtrarElementos(valoresMixtos);
  console.log(filtrados); 
  
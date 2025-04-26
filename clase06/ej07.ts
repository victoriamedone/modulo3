/**Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método
preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción
para que ambas bebidas oculten su lógica de preparación interna pero
expongan un comportamiento común. */

interface Bebida {
    preparar(): void
}

abstract class Cafe implements Bebida {
    preparar(): void {
        console.log(`Preparando café`)
    }
}

abstract class Te implements Bebida {
    preparar(): void {
        console.log(`Preparando té`)
    }
}

class Espresso extends Cafe {
    preparar(): void {
        console.log(`Preparando un espresso con café molido`)
    }
}

class Latte extends Cafe {
    preparar(): void {
        console.log(`Preparando un latte con leche espumada`)
    }
}

class TeVerde extends Te {
    preparar(): void {
        console.log(`Preparando té verde con hojas frescas`)
    }
}

class TeNegro extends Te {
    preparar(): void {
        console.log(`Preparando té negro con agua caliente`)
    }
}

const bebidas: Bebida[] = [
    new Espresso(),
    new Latte(),
    new TeVerde(),
    new TeNegro()
]

bebidas.forEach((bebida) => bebida.preparar())


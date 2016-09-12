function Bienvenida(saludar: string) {
    return function(target: Function) {
        target.prototype.saludo = function(): void {
            console.log(saludar);
        }
    }
}

@Bienvenida('HolaAngular2')
class Saludar {
    constructor() {
        //Implementación va aquí...
    }
}

var miSaludo = new Saludar();
miSaludo.saludo();
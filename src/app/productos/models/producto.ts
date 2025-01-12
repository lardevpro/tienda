export class Producto {

    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public imagen: string
    ) { } //con public se instancian los atributos y se igualan a los valores que se pasan por parámetro

}
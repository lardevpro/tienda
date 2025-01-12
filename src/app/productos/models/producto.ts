export class Producto {

    constructor(
        public id: number,
        public price: number,
        public title: string,
        public description: string,
        public image: string
    ) { } //con public se instancian los atributos y se igualan a los valores que se pasan por parámetro

}
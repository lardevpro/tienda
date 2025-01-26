export class Producto {
    constructor(
        public id: number,
        public price: number,
        public title: string,
        public description: string,
        public images: string[],
        public inventoryStatus: string, // Estado del inventario (ENSTOCK, OUTOFSTOCK, etc.)
        public name: string,            // Nombre del producto
        public rating: number,          // Valoración del producto
        public category: string         // Categoría del producto
    ) { }
}
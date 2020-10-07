import { Injectable } from '@angular/core';

@Injectable()
export class ProductoService {

    // Atributo que contiene productos
    public coleccionProductos = ['Arroz', 'Fideo', 'Maiz'];

    // Metodos de servicio

    // Retornar listado de productos
    getProductos(): Array<string>{
        return this.coleccionProductos;
    }

    // Adicionar nuevo elemento al listado
    addProducto(nombreProducto: string): Array<string> {
        this.coleccionProductos.push(nombreProducto);
        return this.coleccionProductos;
    }

    // Eliminar elemento del listado
    deleteProducto(index: number): Array<string> {
        this.coleccionProductos.splice(index, 1);
        return this.coleccionProductos;
    }
}
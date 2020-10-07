import { Component, OnInit } from '@angular/core';
// Importar servicio
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ ProductoService ]
})
export class ProductoComponent implements OnInit {

  public title: string;
  public listaProductos: Array<string>;
  public nombreProducto: string;

  constructor(
    private productoService: ProductoService
  ) { 
    this.title = 'Gestion de Productos';
  }

  ngOnInit(): void {
    // Llamar al servicio
    this.listaProductos = this.productoService.getProductos();
    console.log(this.listaProductos);    
  }

  guardarProducto(){
    this.productoService.addProducto(this.nombreProducto);
    this.nombreProducto = null;
  }

  eliminarProducto(index: number){
    if(confirm('¿Esta seguro de eliminar el producto?')){
      this.productoService.deleteProducto(index);
    }
  }
}

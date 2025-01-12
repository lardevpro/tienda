import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { Producto } from '../../models/producto';
// import { Observer } from 'rxjs';

@Component({
  selector: 'producto-listado',
  standalone: false,
  
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {

  lista: Producto[] = [];//solo en los componentes que solo muestran

  constructor(private servicio: ConexionService) {
  
    
  }

  ngOnInit(): void {
    // let observador: Observer<Producto[]> = {
    //   next:lista=> this.lista = lista,
    //   error:e=>{},
    //   complete:()=>{},
    // };
    
    this.servicio.getProductos$().subscribe(lista=>this.lista = lista);
    
  }

  leerTodos(){
    this.servicio.leerTodosLosProductos();
  }

  borrarPantalla(){
    this.lista = [];
  }
}

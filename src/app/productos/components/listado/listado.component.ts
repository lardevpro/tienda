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

  lista: Producto[] | null = [];//solo en los componentes que solo muestran

  mensajeError = false;

  constructor(private servicio: ConexionService) {
  
    
  }

  ngOnInit(): void {
    /* let observador: Observer<Producto[]> = { //forma normal de suscribirse a un observable
      next:lista=> this.lista = lista,
      error:e=>{},
      complete:()=>{},
    }; */
    
    //this.servicio.getProductos$().subscribe(lista=>this.lista = lista, e =>{}, ()=>{});// Otra forma de suscribirse a un observable
    
    this.servicio.getProductos$().subscribe(lista=>{
      console.log('La respuesta ha llegado asincronamente...');
      console.log(this.mensajeError);
      if(lista == null) this.mensajeError = true;
      else this.lista = lista;
    });//forma simplificada de suscribirse a un observable
    
  }

  leerTodos(){
    this.servicio.leerTodosLosProductos();
  }

  borrarPantalla(){
    this.mensajeError = false;
    this.lista = [];
  }
}

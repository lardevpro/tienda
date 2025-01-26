import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { Producto } from '../../models/producto';
import { ConexionMejoradaService } from '../../services/conexion-mejorada.service';

@Component({
  selector: 'producto-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  lista: Producto[] | null = [];  // Aseguramos que la lista pueda ser nula o de tipo Producto[]
  mensajeError = false;

  constructor(
    private servicio: ConexionService,
    private servicioMejorado: ConexionMejoradaService
  ) {}

  ngOnInit(): void {
    this.servicio.getProductos$().subscribe(lista => {
      console.log('La respuesta ha llegado asincronamente...');
      if (lista == null) {
        this.mensajeError = true;
      } else {
        this.lista = lista; // Asegúrate de que el servicio devuelve una lista de objetos Producto
      }
    });
  }

  leerTodos() {
    this.servicio.leerTodosLosProductos();
  }

  products(): Producto[] {
    return this.lista || [];

  }

  borrarPantalla() {
    this.mensajeError = false;
    this.lista = [];
  }

  getSeverity(item: Producto): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
    switch (item.inventoryStatus) {
      case 'ENSTOCK':
        return 'success';  // Verde (disponible)
      case 'OUTOFSTOCK':
        return 'danger';   // Rojo (agotado)
      case 'LOWSTOCK':
        return 'warn';     // Amarillo (bajo stock)
      default:
        return 'info';     // Azul (por defecto)
    }
  }
}

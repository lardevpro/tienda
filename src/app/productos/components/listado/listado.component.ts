import { Component } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'producto-listado',
  standalone: false,
  
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  constructor(private servicio: ConexionService) {}


}

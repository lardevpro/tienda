import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { ConexionService } from './services/conexion.service';



@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ConexionService
  ],
  exports: [
    ListadoComponent
  ]
})
export class ProductosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { ConexionService } from './services/conexion.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ConexionService
  ],
  exports: [
    ListadoComponent
  ]
})
export class ProductosModule { }

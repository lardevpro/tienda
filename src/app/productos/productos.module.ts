import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { ConexionService } from './services/conexion.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';



@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ConexionService,
    provideHttpClient(withFetch())
  ],
  exports: [
    ListadoComponent
  ]
})
export class ProductosModule { }

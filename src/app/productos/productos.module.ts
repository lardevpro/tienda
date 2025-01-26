import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './components/listado/listado.component';
import { ConexionService } from './services/conexion.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ConexionMejoradaService } from './services/conexion-mejorada.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';  
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    TagModule  
  ],
  providers: [
    ConexionMejoradaService,
    ConexionService,
    provideHttpClient(withFetch())
  ],
  exports: [
    ListadoComponent
  ]
})
export class ProductosModule { }

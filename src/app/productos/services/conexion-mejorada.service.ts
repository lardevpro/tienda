import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observer } from 'rxjs';

@Injectable()
export class ConexionMejoradaService {

  constructor(private http:HttpClient) { 
    const observador:Observer <Producto[]> = {
      next:p=> {},
      error:e=> {},
      complete:()=>{}
  }

  this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products').subscribe(observador);
  }
}

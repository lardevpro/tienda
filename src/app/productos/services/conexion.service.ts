import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observer, Subject } from 'rxjs';


@Injectable()
export class ConexionService {

  private productos$=new Subject<Producto[]>();//subject crea observables porque exitende a la clase Obsevable

  constructor(private http: HttpClient) { }


  public getProductos$(){
    return this.productos$;
  }

  public leerTodosLosProductos(): void {

    let observador:Observer<Producto[]> = {
      next:e=> {
        console.log('-------Nextttt');
        console.log(e);
        this.productos$.next(e);
      },
      error:e=> {
        console.log('-------Error');
        //no hago nada
      },
      complete:()=> {
        console.log('------Complete');
        //no hago nada
      },
    };

    console.log('VOya allamar');
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products').subscribe(observador);//utiliza el patron de diseño observable
    console.log('Llamado');
  }
}

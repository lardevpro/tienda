import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observer, Subject } from 'rxjs';


@Injectable()
export class ConexionService {

  private productos$=new Subject<Producto[] | null>();//subject crea observables porque exitende a la clase Obsevable

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
        console.log('-------Error');//en caso de error muestro mensaje personalizado
        console.log(e); //muestro el error
        this.productos$.next(null); //envio un null para que el componente lo muestre
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

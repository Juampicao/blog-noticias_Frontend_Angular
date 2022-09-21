import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceNoticias {
  
  // apiUrl: string = environment.apiUrl
   apiUrl: string = "../../../../assets/data/backend.js"

  //    listaNoticias: any[] = [
  //      { titulo: "River Campeon", descripcion: 'Otra vuelta mas del millo', contenido: " asfasfask asfjasf kasl flasflas lasfsal flas lsaflss l als flasf lsl asfl l" },
  //     { titulo: "Federer Retirado", descripcion: 'Se retiro el mas grande', contenido: " asfasfask asfjasf kasl flasflas lasfsal flas lsaflss l als flasf lsl asfl l" },
  //     { titulo: "Federer Retirado", descripcion: 'Se retiro el mas grande', contenido: " asfasfask asfjasf kasl flasflas lasfsal flas lsaflss l als flasf lsl asfl l" },
       
  //  ];

  listaNoticias: any[] = []

  constructor( private http: HttpClient) { }

  // Backend Json
  getNoticias() : Observable<any[]>{
  return this.http.get<any>(`/assets/data/backend.json`)
}

  // Lista interna
  // getNoticias() {
  //   return this.listaNoticias.slice();
  // }


  getNoticiaById() {
    return this.listaNoticias.slice(1);
  }
  
  eliminarUsuario(index: number) {
   this.listaNoticias.splice(index,1)
    
  }
  
  agregarNoticia(noticia: any) {
    this.listaNoticias.push(noticia)
    console.log(`es noticia => `, noticia)
    console.log(this.listaNoticias)
  }
}

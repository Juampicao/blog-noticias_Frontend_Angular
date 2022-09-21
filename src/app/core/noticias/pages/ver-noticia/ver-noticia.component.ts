import { Component, Input, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { ServiceNoticias } from '../../services/serviceNoticias';

@Component({
  selector: 'app-ver-noticia',
  templateUrl: './ver-noticia.component.html',
  styleUrls: ['./ver-noticia.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerNoticiaComponent implements OnInit {

  listaNoticias: any[] = []

  
  
  // noticia: any = ""
  constructor(
    private _serviceNoticias: ServiceNoticias
  ) { }

  ngOnInit(): void {
    this.cargarNoticias()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  //  cargarNoticias() {
  //    this.listaNoticias = this._serviceNoticias.getNoticias;
  //    console.log(this.listaNoticias)
  //  }
  
   cargarNoticias() {
     this._serviceNoticias.getNoticias().subscribe(data => {
       this.listaNoticias = data;
       console.log(this.listaNoticias)
     })
   }
  

}

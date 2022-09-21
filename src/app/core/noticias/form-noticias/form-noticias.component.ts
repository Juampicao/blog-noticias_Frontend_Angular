import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceNoticias } from '../services/serviceNoticias';

@Component({
  selector: 'app-form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent implements OnInit {

   @Input() color!: string;
  @Input() label!: string;
  @Input() ButtonName!: string;
  @Output() OutputNuevaNoticia = new EventEmitter<any>()

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _serviceNoticia: ServiceNoticias
  ) {
   {
    this.form = this.fb.group({
      titulo: [``, Validators.required],
      descripcion: [``, Validators.required],
      contenido: [``, Validators.required],
    })
   }
  }
  
  ngOnInit(): void {
    
  }

  AddNew() {
    const noticia = {
      titulo: this.form.value.titulo,
      descripcion : this.form.value.descripcion,
      contenido : this.form.value.contenido,
    }

    // Servicio
    this._serviceNoticia.agregarNoticia(noticia)
    // Output
    this.OutputNuevaNoticia.emit(noticia)
    this._snackBar.open(`Noticia creada correctamente`, ``, {
      duration: 3000,
      horizontalPosition: `center`,
      verticalPosition: `bottom`,
    })

    console.log(noticia)
  }

}

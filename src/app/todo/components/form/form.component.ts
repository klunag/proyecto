import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Postulante } from 'src/app/shared/models/postulante.model';
import { TodoService } from '../../services/todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Output() update = new EventEmitter()
  isLinear = false;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;
  postulante: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private todoservice: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
 
  guardarPostulante() {
    console.log(this.firstFormGroup?.value);
    console.log(this.secondFormGroup?.value);
    const postulante: Postulante = {
      id: this.todoservice.generarId(),
      descripcion: this.firstFormGroup?.get('firstCtrl')?.value,
      descripcion2 :this.secondFormGroup?.get('secondCtrl')?.value,
      hecho: false
    }
    this.todoservice.guardarPostulante(postulante)
    .subscribe( async(res) => {
      await Swal.fire({
        title: 'Correcto',
        text: ' Se registró el postulante con ID ' + res.id,
        icon: 'success'
      });
      this.update.emit();
      this.postulante = '';
      
    } ,
    err => {
      Swal.fire({
        title: 'Ups!',
        text: ' Ocurrió un error al intentar registrar el postulante',
        icon: 'error'
      });
    }
    ); 
  }

  regresar() {
    this.router.navigate(['lista']); 
  }

}

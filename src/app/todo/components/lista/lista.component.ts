import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit, DoCheck {
  @Input() tareas: Tarea[] = [];
  @Output() eliminarTarea = new EventEmitter();
  @Output() actualizarTarea = new EventEmitter();

  postulantesSeleccionados = 0;
  dataSource : any;
  ELEMENT_DATA:any;
  
  displayedColumns: string[] = ['descripcion', 'descripcion2'];

  constructor(
    private route: Router,
    private todoservice:TodoService
  ) { }

  ngOnInit(): void {

    this.ELEMENT_DATA = this.todoservice.obtenerTarea();
    this.dataSource = this.ELEMENT_DATA;
    console.log(this.dataSource)
  }

  ngDoCheck(): void {
    this.postulantesSeleccionados = this.tareas === null ? 0 :  this.tareas?.filter( t => t.hecho).length;
  }

  eliminar(tareaId: number) {
    console.log({tareaId});
    Swal.fire({
      icon: 'warning',
      title: '¿Estas seguro que deseas borrar el postulante con ID' + tareaId,
      cancelButtonText: 'No borrar',
      confirmButtonText: 'Si, borrar',
      showConfirmButton: true,
      showCancelButton: true
    }).then( value => {
      if(value.isConfirmed) {
        this.eliminarTarea.emit(tareaId);
      }
    })
    
  }

  actualizar(tareaId: string, tareaDescripcion: string) {
    console.log({tareaId}); 
    this.route.navigate(['update', { id: tareaId, descripcion: tareaDescripcion}]);
  }  
  
  seleccionar(tarea: Tarea) {
    this.tareas.forEach( t => {
      if( t.id === tarea.id) {
        t.hecho = !t.hecho
        this.actualizarTarea.emit(t);
      }
    });
    
    console.log(this.tareas);
  }
}

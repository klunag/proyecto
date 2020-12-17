import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { Postulante } from 'src/app/shared/models/postulante.model';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css']
})
export class ListaPageComponent implements OnInit {
  tareas$ = new Observable<Tarea[]>();
  tareas: Tarea[] = [];
  postulantes$ = new Observable<Postulante[]>();
  postulantes: Postulante[] = [];

  constructor(
    private todoService: TodoService,
    private router: Router
    ) {
    this.obtenerTareas();
    this.obtenerPostulantes();
   }

  ngOnInit(): void {
  }

  obtenerTareas() {
    this.tareas$ = this.todoService.obtenerTarea()
    this.tareas$.subscribe( tareas => this.tareas = tareas,
      err => console.log('No se pudieron obtener las tareas')
      );
  }

  obtenerPostulantes() {
    this.postulantes$ = this.todoService.obtenerPostulante()
    this.postulantes$.subscribe( postulantes => this.postulantes = postulantes,
      err => console.log('No se pudieron obtener los postulantes')
      );
  }

  eliminarTarea(tareaId: number) {
    this.todoService.eliminarTarea(tareaId)
    .subscribe( res => {
      console.log( {res})
      this.obtenerTareas();
    })
  }

  actualizarTarea(tarea: Tarea){
    this.todoService.actualizarTarea(tarea)
    .subscribe( res => {
      console.log('Se seleccionó el postulante');
    })
  }

  ingresarPostulante() {
    this.router.navigate(['form']); 
  }

}

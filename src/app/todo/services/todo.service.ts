import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { Postulante } from 'src/app/shared/models/postulante.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {
  tareas: Tarea[] = [];
  url = environment.apiUrl + environment.endpoints.tareas;
  postulantes: Postulante[] = [];
  //urlPostulante = environment.apiUrl + environment.endpoints.postulantes;
  constructor( private http: HttpClient) { 
    console.log('servicio todo iniciado')
  }

  agregarTarea(tarea: Tarea) {
    return this.http.post<Tarea>(this.url, tarea); 
  }

  obtenerTarea() {
    return this.http.get<Tarea[]>(this.url);
  }

  obtenerPostulante() {
    return this.http.get<Postulante[]>(this.url);
  }

  eliminarTarea(tareaId: number) {
    const url = `${this.url}/${tareaId}`;
    return this.http.delete(url);
  }
 
  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }

  actualizarTarea(tarea: Tarea) {
    return this.http.put(`${this.url}/${tarea.id}`, tarea);
  }

  guardarPostulante(postulante: Postulante) {
    return this.http.post<Postulante>(this.url, postulante); 
  }

}

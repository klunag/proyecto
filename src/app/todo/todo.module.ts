import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaComponent } from './components/lista/lista.component';
import {MatListModule} from '@angular/material/list';
import { TodoService } from './services/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { UpdateComponent } from './components/update/update.component';
import { FormComponent } from './components/form/form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AddComponent, ListaPageComponent, ListaComponent, UpdateComponent, FormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    ListaPageComponent
  ],
  providers: [TodoService]
})
export class TodoModule { }

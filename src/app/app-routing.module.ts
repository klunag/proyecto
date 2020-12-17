import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './todo/components/form/form.component';
import { UpdateComponent } from './todo/components/update/update.component';
import { ListaPageComponent } from './todo/pages/lista-page/lista-page.component';

const routes: Routes = [
  {path: 'lista', component: ListaPageComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'form', component: FormComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'lista'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

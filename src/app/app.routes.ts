import { RouterModule, Routes } from '@angular/router';
import { LivroListComponent } from './components/livro-list/livro-list.component';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { NgModule }from '@angular/core';

export const routes: Routes = [
  {path: '', component: LivroListComponent},
  {path: 'livro/new', component: LivroFormComponent},
  {path: 'livro/edit/:id', component: LivroFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

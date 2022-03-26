import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInscritosComponent } from './pagina-inscritos.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : '', component : PaginaInscritosComponent}
]

@NgModule({
  declarations: [
    PaginaInscritosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaginaInscritosModule { }

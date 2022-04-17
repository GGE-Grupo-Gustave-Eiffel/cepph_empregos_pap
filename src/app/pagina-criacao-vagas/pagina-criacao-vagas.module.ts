import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCriacaoVagasComponent } from './pagina-criacao-vagas.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : '', component : PaginaCriacaoVagasComponent}
]

@NgModule({
  declarations: [
    PaginaCriacaoVagasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaginaCriacaoVagasModule { }

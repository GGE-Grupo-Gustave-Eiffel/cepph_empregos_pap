import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCriacaoVagasComponent } from './pagina-criacao-vagas.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {path : '', component : PaginaCriacaoVagasComponent}
]

@NgModule({
  declarations: [
    PaginaCriacaoVagasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PaginaCriacaoVagasModule { }

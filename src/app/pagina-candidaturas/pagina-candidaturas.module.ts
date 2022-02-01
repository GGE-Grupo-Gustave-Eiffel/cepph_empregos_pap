import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCandidaturasComponent } from './pagina-candidaturas.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {path : '', component : PaginaCandidaturasComponent}
]

@NgModule({
  declarations: [
    PaginaCandidaturasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaginaCandidaturasModule { }

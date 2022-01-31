import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCadastroComponent } from './formulario-cadastro.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {path : '', component : FormularioCadastroComponent}
]

@NgModule({
  declarations: [
    FormularioCadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormularioCadastroModule { }

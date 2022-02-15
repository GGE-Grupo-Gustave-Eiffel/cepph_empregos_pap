import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCadastroComponent } from './formulario-cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {path : '', component : FormularioCadastroComponent}
]

@NgModule({
  declarations: [
    FormularioCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormularioCadastroModule { }

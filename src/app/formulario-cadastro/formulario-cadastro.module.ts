import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCadastroComponent } from './formulario-cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

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
    FormBuilder,
    Validators,
    RouterModule.forChild(routes)
  ]
})
export class FormularioCadastroModule { }

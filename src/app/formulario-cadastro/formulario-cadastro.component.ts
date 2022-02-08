import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent implements OnInit {

    public formularioDeCadastro ! : FormGroup;
 
    constructor(
      private formConstrutor : FormBuilder
    ) 
    { }

  ngOnInit(): void {
    this.formularioDeCadastro = this.formConstrutor.group(
      {
      nome : ['', [Validators.required]],
      bi : ['', [Validators.required]],
      email :  ['', [Validators.required]],
      telefone :  ['', [Validators.required]]
      }
    )
  }

  onSubmit()
  {
      console.log(this.formularioDeCadastro.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequisicaoService } from '../servico/requisicao.service';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent implements OnInit {

    public formularioDeCadastro ! : FormGroup;
    public msgDeEnvio! : any;
    public alertDoServidor : boolean = false;

    constructor(
      private formConstrutor : FormBuilder,
      private backendService : RequisicaoService
    ) { }

  ngOnInit(): void {
    this.formularioDeCadastro = this.formConstrutor.group(
      {
      nome : ['', [Validators.required]],
      data : ['', [Validators.required]],
      bi : ['', [Validators.required]],
      nacionalidade : ['', [Validators.required]],
      email :  ['', [Validators.required]],
      genero : ['' , [Validators.required]],
      nivel_academico :['',[Validators.required]],
      telefone :  ['', [Validators.required]],
      anos_xp : ['',[Validators.required]],
      descricao_xp : ['',[Validators.required]]
      }
    )
  }

  onSubmit()
  {
    this.backendService.enviar_dados_de_candidatura(this.formularioDeCadastro.value).subscribe((result) => {
     
      this.alertDoServidor = true;
      this.msgDeEnvio = result;

      console.log(this.formularioDeCadastro.value);


      this.formularioDeCadastro.reset();
    });

  }
}

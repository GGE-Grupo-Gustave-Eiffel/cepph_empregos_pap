import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequisicaoService } from '../servico/requisicao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent implements OnInit {

    public formularioDeCadastro ! : FormGroup;
    public msgDeEnvio! : any;
    public alertDoServidor : boolean = false;
    public id !: number;
    public sub !: any;

    constructor(
      private formConstrutor : FormBuilder,
      private backendService : RequisicaoService,
      private route: ActivatedRoute,
    ) {}

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
      descricao_xp : ['',[Validators.required]],
      Id_vaga : ['' , [Validators.required]]
      }
    )

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.formularioDeCadastro.controls['Id_vaga'].setValue(this.id);
      //console.log(this.id)
      // In a real app: dispatch action to load the details here.
   });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit()
  {
    this.backendService.enviar_dados_de_candidatura(this.formularioDeCadastro.value).
    subscribe((result) => {
      this.alertDoServidor = true;
      this.msgDeEnvio = result;
      this.formularioDeCadastro.reset();
    });

  }
}

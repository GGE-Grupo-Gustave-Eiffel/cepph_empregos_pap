import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequisicaoService } from '../servico/requisicao.service';

@Component({
  selector: 'app-pagina-criacao-vagas',
  templateUrl: './pagina-criacao-vagas.component.html',
  styleUrls: ['./pagina-criacao-vagas.component.scss']
})
export class PaginaCriacaoVagasComponent implements OnInit {

  public paginaCriacaoVagas ! : FormGroup;
  constructor(
    private formConstrutor : FormBuilder,
    private backendService : RequisicaoService
  ) {}

  ngOnInit(): void {
    this.paginaCriacaoVagas = this.formConstrutor.group(
      {
      departamento : ['', [Validators.required]],
      numero_de_vagas : ['', [Validators.required]],
      limite_de_candidatura : ['', [Validators.required]],
      cargo : ['', [Validators.required]]
      //id_vaga : [ '', [Validators.required]]
      }
    )
  }

  onSubmit() {
    this.backendService.enviar_dados_de_criacao_de_vagas(this.paginaCriacaoVagas.value).
      subscribe((result) => {
        
        console.log(this.paginaCriacaoVagas.value)
        console.log(result)
      });
      
    }

}

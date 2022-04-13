import { RequisicaoService } from './../servico/requisicao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-inscritos',
  templateUrl: './pagina-inscritos.component.html',
  styleUrls: ['./pagina-inscritos.component.scss']
})
export class PaginaInscritosComponent implements OnInit {

   inscricoes_dados: Array <any> = [];


  constructor(private requisicaoService : RequisicaoService) { }

  ngOnInit() {
   // this.listar();
   this.requisicaoService.listar().subscribe((dados) => {
     this.inscricoes_dados.push(dados);
    });
  }

 /* listar (){

    this.requisicaoService.listar().subscribe(dados => this.inscricoes_dados = dados);
  }*/
}

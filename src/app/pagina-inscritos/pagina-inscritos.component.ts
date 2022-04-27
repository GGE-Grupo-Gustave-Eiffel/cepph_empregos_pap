import { RequisicaoService } from './../servico/requisicao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-inscritos',
  templateUrl: './pagina-inscritos.component.html',
  styleUrls: ['./pagina-inscritos.component.scss']
})
export class PaginaInscritosComponent implements OnInit {

  public inscricoes_dados!: any;


  constructor(private requisicaoService : RequisicaoService) { 

  }

  ngOnInit() :  void {
  
    this.listar();
  /*this.requisicaoService.listar().subscribe((dados) => {
     this.inscricoes_dados.push(dados);
    });*/
    
  }

    listar (){

    //this.requisicaoService.listar().subscribe(dados => this.inscricoes_dados = dados);
    console.log('<h3>Listando</h3>');
    this.requisicaoService.listar_candidatos_inscritos().subscribe(res =>{
      this.inscricoes_dados = res
    })
  }
}

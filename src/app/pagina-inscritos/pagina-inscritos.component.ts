import { RequisicaoService } from './../servico/requisicao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-inscritos',
  templateUrl: './pagina-inscritos.component.html',
  styleUrls: ['./pagina-inscritos.component.scss']
})
export class PaginaInscritosComponent implements OnInit {

   inscricoes_dados: any;


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
    console.log('Listando');
    this.requisicaoService.listar().subscribe(res =>{
      console.log(res);
      this.inscricoes_dados = res;
    })
  }
}

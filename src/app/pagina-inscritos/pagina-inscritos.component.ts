import { RequisicaoService } from './../servico/requisicao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-inscritos',
  templateUrl: './pagina-inscritos.component.html',
  styleUrls: ['./pagina-inscritos.component.scss']
})
export class PaginaInscritosComponent implements OnInit {

   inscricoes_dados: Array <any> = [
    {
      nome : 'Justino Filipe' ,
      nomeVaga : 'Técnico de Informática' ,
      dataInscricao : '2022-03-25' ,
      telefone : '+244 940 888 500' ,
      genero : 'M' ,
      nacionalidade : 'Angolana' ,
      nivelAcamico : 'Técnico médio'
    } ,

    {
      nome : 'Anildo Marques' ,
      nomeVaga : 'Técnico de Informática' ,
      dataInscricao : '2022-03-25' ,
      telefone : '+244 930 888 500' ,
      genero : 'M' ,
      nacionalidade : 'Angolana' ,
      nivelAcamico : 'Técnico médio'
    } ,

    {
      nome : 'Jeterson Jesus' ,
      nomeVaga : 'Técnico de Informática' ,
      dataInscricao : '2022-03-25' ,
      telefone : '+244 923 888 500' ,
      genero : 'M' ,
      nacionalidade : 'Angolana' ,
      nivelAcamico : 'Técnico médio'
    } ,

    {
      nome : 'Lucamba' ,
      nomeVaga : 'Técnico de Informática' ,
      dataInscricao : '2022-03-25' ,
      telefone : '+244 924 088 500' ,
      genero : 'M' ,
      nacionalidade : 'Angolana' ,
      nivelAcamico : 'Técnico médio'
    } ,

    {
      nome : 'Luís Tchitue' ,
      nomeVaga : 'Técnico de Informática' ,
      dataInscricao : '2022-03-25' ,
      telefone : '+244 920 888 500' ,
      genero : 'M' ,
      nacionalidade : 'Angolana' ,
      nivelAcamico : 'Técnico médio'
    }
   ];


  constructor(private requisicaoService : RequisicaoService) { }

  ngOnInit() {
  
  /* this.requisicaoService.listar().subscribe((dados) => {
     this.inscricoes_dados.push(dados);
    });
    */
  }

 /* listar (){

    this.requisicaoService.listar().subscribe(dados => this.inscricoes_dados = dados);
  }*/
}

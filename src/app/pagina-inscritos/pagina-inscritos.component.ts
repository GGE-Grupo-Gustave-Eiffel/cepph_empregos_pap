import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inscritos',
  templateUrl: './pagina-inscritos.component.html',
  styleUrls: ['./pagina-inscritos.component.scss']
})
export class PaginaInscritosComponent implements OnInit {

  public inscricoes_dados : any[] = [
    {
      nome : 'Justino Filipe',
      nomeVaga : 'Técnico de Informática',
      dataInscricao : '2022-03-25',
      telefone : '+355900888500',
      genero : 'M',
      nacionalidade : 'Angolana',
      nivelAcamico : 'Técnico médio'
    },

    {
      nome : 'Anildo Marques',
      nomeVaga : 'Técnico de Informática',
      dataInscricao : '2022-03-25',
      telefone : '+355900888500',
      genero : 'M',
      nacionalidade : 'Angolana',
      nivelAcamico : 'Técnico médio'
    },

    {
      nome : 'Jeterson Jesus',
      nomeVaga : 'Técnico de Informática',
      dataInscricao : '2022-03-25',
      telefone : '+355900888500',
      genero : 'M',
      nacionalidade : 'Angolana',
      nivelAcamico : 'Técnico médio'
    },

    {
      nome : 'Lucamba',
      nomeVaga : 'Técnico de Informática',
      dataInscricao : '2022-03-25',
      telefone : '+355900888500',
      genero : 'M',
      nacionalidade : 'Angolana',
      nivelAcamico : 'Técnico médio'
    },

    {
      nome : 'Luís Tchitue',
      nomeVaga : 'Técnico de Informática',
      dataInscricao : '2022-03-25',
      telefone : '+355900888500',
      genero : 'M',
      nacionalidade : 'Angolana',
      nivelAcamico : 'Técnico médio'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

import { RequisicaoService } from './../servico/requisicao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-inscritos',
  templateUrl: './pagina-inscritos.component.html',
  styleUrls: ['./pagina-inscritos.component.scss']
})
export class PaginaInscritosComponent implements OnInit {

  public inscricoes_dados!: any;

  //Convertendo o grau_acadêmico!

  // filtros:
  public nome_das_vagas: any = [
    {campo : "Nivel_academico", valor_alternativo : "Técnico Superior", valor : 3},
    {campo : "genero", valor_alternativo : "Candidatos do Gênero Femenino", valor : "Femenino"},
    {campo : "genero", valor_alternativo :"Candidatos do Gênero Masculino",  valor : "Masculino"},
    {campo : "nacionalidade", valor_alternativo : "Nacionalidade Angolana", valor : "Angolana"}
  ];


  constructor(private requisicaoService : RequisicaoService) { }

  ngOnInit() :  void {
    this.listarInscritos();
    this.listarVagas()
  }

  listarInscritos(){
    this.requisicaoService.listar_candidatos_inscritos().subscribe(res =>{
      this.inscricoes_dados = res
      //console.log(this.inscricoes_dados)
    })
  }

  listarVagas() {
    this.requisicaoService.listar_vagas().subscribe((res : any) =>{
      res.vagas.forEach((vaga : any)=>{
        let obj_vaga = {
          campo : "Id_vaga",
          valor_alternativo : vaga.cargo,
          valor : vaga.Id
        }

        this.nome_das_vagas.push(obj_vaga);
      });
    });
  }

  


  filtro(i : any) {
    this.requisicaoService.filtros(i).subscribe((res : any) =>{
      debugger
      this.inscricoes_dados = res;
    });
  }

  eliminarInscrito(BI : any){
    console.log(BI);
      // this.requisicaoService.eliminar_candidato(BI).subscribe(res =>{
      //   this.listarInscritos();
      //   this.listarVagas();
      }
  }


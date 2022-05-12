import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { RequisicaoService } from '../servico/requisicao.service';

@Component({
  selector: 'app-definicoes',
  templateUrl: './definicoes.component.html',
  styleUrls: ['./definicoes.component.scss']
})
export class DefinicoesComponent implements OnInit {

  public subscricao01! : any;
  public subscricao02! : any;


  public vagas_disponiveis !: any;
  public departamentos : Array<any> = [
    'Pedagógico',
    'Administrativo'
  ];

  constructor(private requisicaoService : RequisicaoService) { }

  ngOnInit(): void {
    this.subscricao01 = this.requisicaoService.listar_vagas().subscribe((res : any) =>{
      this.vagas_disponiveis = res.vagas;
    });
  }

  converteIdEmNum(id : any) {
    let idEmNumero = +(id.Departamento);
    return idEmNumero - 1;
  }

  eliminarVaga(vagasID : any) {
    this.subscricao02 = this.requisicaoService.elimina_vagas(vagasID).subscribe((res : any) => {
      console.log(res);
    });
  }

  ngOnDestroy() : void {
    this.subscricao01.unsubscribe();
  } 
}

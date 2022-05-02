import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../servico/requisicao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public incricao_vagas !: any;
  public departamentos : Array<any> = [
    'Pedagógico',
    'Administrativo'
  ];

  constructor(private requisicaoService : RequisicaoService) { }

  ngOnInit(): void {
    this.requisicaoService.listar_vagas().subscribe((res : any) =>{
      this.incricao_vagas = res.vagas;
    });
  }

  converteIdEmNum(id : any) {
    console.log(id);
    let idEmNumero = +(id.Departamento);
    return idEmNumero - 1;
  }

  // getI_vaga(Id_v : any)
  // {
  //   console.log(Id_v);
  //   let Id_vaga = Id_v.Id;
  //   return Id_vaga;
  // }



}

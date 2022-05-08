import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  

  //requisicaoUrl = '127.0.0.1:8000/api/vaga';
  constructor(private httpClient : HttpClient) { }


  listar_candidatos_inscritos(){
   // return this.http.get<any[]>(`${this.requisicaoUrl}`);
   //return this.http.get<any[]>(`${environment.baseUrl}/vagas`);
   return this.httpClient.get('http://127.0.0.1:8000/api/inscritos');
  }

  listar_vagas() {
    return this.httpClient.get('http://127.0.0.1:8000/api/vagas');
  }
  
  filtros(nome_do_filtro : any){
    return this.httpClient.get('http://127.0.0.1:8000/api/filtro?campo='+nome_do_filtro.campo+'&valor='+nome_do_filtro.valor);

  }

  enviar_dados_de_candidatura(obj_de_candidatura : any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/cadastro', obj_de_candidatura);
  }

  enviar_dados_de_criacao_de_vagas(obj_de_vagas : any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/vagas', obj_de_vagas);
  }

  eliminar_candidato(BI : any) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/inscritos/'+ BI);
  }

  /*list(){
    return this.http.get<any[]>(`${environment.baseUrl}/inscritos`);
  }*/
}

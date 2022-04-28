import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvioDadosService {

  constructor(private http : HttpClient) {}

  enviar(envioDados : any ) {
    return this.http.post(`${environment.baseUrl}/cadastro`, envioDados);
  }
}

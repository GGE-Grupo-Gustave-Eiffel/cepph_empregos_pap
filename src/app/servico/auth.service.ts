import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  login() {
    return this.httpClient.post('http://127.0.0.1:8000/api/login', {email : 'abc@gmail.com', password : 'abc'});
  }

}

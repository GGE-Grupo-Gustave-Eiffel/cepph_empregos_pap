import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servico/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formularioLogin ! : FormGroup;

  constructor(
    private formConstrutor : FormBuilder, 
    private servicoAutenticacao : AuthService
  ) { }

  ngOnInit(): void {
    this.formularioLogin = this.formConstrutor.group(
      {
      email : ['', [Validators.required]],
      password : ['', [Validators.required]]
      }
    )
  }

  onSubmit()
  {
      this.servicoAutenticacao.login().subscribe((res : any)=>{
        console.log(res);
      })
  }
  

}

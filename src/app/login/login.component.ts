import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formularioLogin ! : FormGroup;

  constructor(private formConstrutor : FormBuilder) { }

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
      console.log(this.formularioLogin.value)
  }
  

}

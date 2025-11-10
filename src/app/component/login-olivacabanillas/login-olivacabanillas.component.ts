import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Credentials } from '../../model/credentials';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-olivacabanillas',
  templateUrl: './login-olivacabanillas.component.html',
  styleUrl: './login-olivacabanillas.component.css'
})
export class LoginOlivacabanillasComponent {

  creds: Credentials = {
    username: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private loginService: LoginService, private router: Router) {console.log("INICIO DE FORM LOGIN")}

  login(form: NgForm){
    console.log('form value', form.value);
     this.loginService.login(this.creds)
      .subscribe(response => {
        this.router.navigate(['/home']);
      });
  }

}

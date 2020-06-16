import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { LoginService } from 'src/_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public submitted: boolean;
  public errorEmail: boolean;
  public errorSenha: boolean;
  public usuario: [] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  public login(): void {
    this.submitted = !this.submitted;

    if (this.formLogin.invalid) {
      return;
    }
    const email = this.formLogin.controls.email.value;
    const senha = this.formLogin.controls.senha.value;

    // Organizar código
    this.loginService.logar(email, senha)
      .pipe(first())
      .subscribe(data => {
        if (data.error) {
          this.router.navigate(['/']);
          alert(data.error);
        } else {
          this.usuario = data;
          console.log(this.usuario);
          this.router.navigate(['home']);
        }
      });

  }

  public inputError(event): void {
    if (event === 'email') {
      this.errorEmail = !this.errorEmail;
    } else {
      this.errorSenha = !this.errorSenha;
    }
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.minLength(4), Validators.required]]
    });
  }

}

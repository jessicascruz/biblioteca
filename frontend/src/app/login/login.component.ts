import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  public login(): void {
    this.submitted = !this.submitted;

    if (this.formLogin.invalid) {
      return;
    }

  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.minLength(4), Validators.required]]
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }

  logar(email: string, senha: string) {
    return this.http.post<any>(`${environment.apiUrl}/session`, { email, senha });
  }

}

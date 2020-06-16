import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

public API = 'https://www.googleapis.com/books/v1/volumes?q=';

constructor(private http: HttpClient) { }


    busca(livro: string): Observable<any> {
      try {
        // `${environment.apiUrl}/session`, { email, senha }
        return this.http.get<any>(this.API + livro + '&maxResults=5');
      } catch {
        console.log('error');
      }
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

public apiBook = 'https://www.googleapis.com/books/v1/volumes?q=';
public apiISBN = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

constructor(private http: HttpClient) { }


    buscarLivro(livro: string): Observable<any> {
      try {
        return this.http.get<any>(this.apiBook + livro + '&maxResults=5');
      } catch {
        console.log('error');
      }
    }

    buscaISBN(isbn: string): Observable<any> {
      try {
        return this.http.get<any>(this.apiISBN + isbn + '&maxResults=1');
      } catch {
        console.log('error');
      }
    }


}

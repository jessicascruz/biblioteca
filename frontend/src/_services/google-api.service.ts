import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

public API = 'https://www.googleapis.com/books/v1/volumes?q=';


constructor(private http: HttpClient) { }


    busca(livro: string): Observable<any> {
      try {
        // return this.http.get<any>(this.API + livro + '+intitle' + '&maxResults=12');
        return this.http.get<any>(this.API + livro + '+intitle');
      } catch {
        console.log('error');
      }
    }

}

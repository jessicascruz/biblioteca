import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'src/_services/google-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public livro: string;
  public livros: any[] = [];

  constructor(private googleApi: GoogleApiService) { }

  buscarLivros() {
    this.googleApi.busca(this.livro)
      .subscribe(data => {
        this.livros = data.items;
    });
  }

  ngOnInit() {
  }

}

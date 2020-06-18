import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { GoogleApiService } from 'src/_services/google-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  public livro: string;
  public livros: any[] = [];


  constructor(private googleApi: GoogleApiService) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  buscarLivros() {
    this.googleApi.buscarLivro(this.livro)
      .subscribe(data => {
        this.livros = data.items;
      },
      error => { console.log('erro');
      });
  }

  ngOnInit(): void {
    this.googleApi.buscarLivro('teste')
      .subscribe(data => {
          this.livros = data.items;
      },
      error => { console.log('erro');
      });
  }

}

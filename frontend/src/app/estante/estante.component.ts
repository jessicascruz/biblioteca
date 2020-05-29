import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'src/_services/google-api.service';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./estante.component.css']
})
export class EstanteComponent implements OnInit {

  public livros: Array<any> = [];

  constructor(private googleApi: GoogleApiService) {}

  retorno(): void { }

  ngOnInit(): void {
     this.googleApi.busca('javascript')
        .subscribe( data => {
          this.livros = data.items;
          console.log(this.livros);
        }
      );


  }

}

import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'src/_services/google-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css']
})
export class DetalheLivroComponent implements OnInit {

  public livro;

  constructor(private googleApi: GoogleApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    const isbn = this.route.snapshot.params['isbn'];

    this.googleApi.buscaISBN(isbn).
         subscribe(data => {
            console.log(data.items);
            this.livro = data.items[0];
    });

  }

}

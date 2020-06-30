import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'src/_services/google-api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddLivroComponent } from '../add-livro/add-livro.component';

@Component({
  selector: 'app-detalhe-livro',
  templateUrl: './detalhe-livro.component.html',
  styleUrls: ['./detalhe-livro.component.css']
})
export class DetalheLivroComponent implements OnInit {

  public livro;

  constructor(
    private googleApi: GoogleApiService,
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  public favorito: boolean;

  // Implementar api para favoritar
  public favoritar(): void {
    this.favorito = !this.favorito;
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddLivroComponent, {data: this.livro, width: '725px'});

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }


  ngOnInit() {
    const isbn = this.route.snapshot.params['isbn'];

    this.googleApi.buscaISBN(isbn).
         subscribe(data => {
            this.livro = data.items[0];
    });
  }

}

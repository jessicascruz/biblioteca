import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-livro',
  templateUrl: './add-livro.component.html',
  styleUrls: ['./add-livro.component.css']
})
export class AddLivroComponent implements OnInit {

  public livro;
  public image: string;
  public status: string[] = ['Quero ler', 'Comprar', 'Lido', 'Abandonado', 'Lendo'];
  public form: FormGroup;
  public pdf: boolean;
  public eBook: boolean;
  public favorito: boolean;

  constructor(
    private dialogRef: MatDialogRef<AddLivroComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder

  ) {
    this.livro = data;
    console.log('dialog', this.livro);
  }


  exibirLinkPdf() {
    this.pdf = !this.pdf;
  }

  exibirLinkEbook() {
    this.eBook = !this.eBook;
  }

  public favoritar(): void {
    this.favorito = !this.favorito;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [this.livro.volumeInfo.title],
      autor: [this.livro.volumeInfo.authors],
      descricao: [this.livro.volumeInfo.description]
    });

    this.image = this.livro.volumeInfo.imageLinks.smallThumbnail;
  }

}

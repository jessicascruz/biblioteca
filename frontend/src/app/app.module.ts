import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { LoginComponent } from './login/login.component';
import { EstanteComponent } from './estante/estante.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MetasComponent } from './metas/metas.component';
import { DetalheLivroComponent } from './detalhe-livro/detalhe-livro.component';
import { AddLivroComponent } from './add-livro/add-livro.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      EstanteComponent,
      EmprestimoComponent,
      HomeComponent,
      SidebarComponent,
      MetasComponent,
      DetalheLivroComponent,
      AddLivroComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      HttpClientModule,
      MatButtonModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSlideToggleModule,
      MatTooltipModule,
      MatDialogModule,
      MatCheckboxModule,
      MatSelectModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

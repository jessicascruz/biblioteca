import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstanteComponent } from './estante/estante.component';
import { EmprestimoComponent } from './emprestimo/emprestimo.component';
import { HomeComponent } from './home/home.component';
import { MetasComponent } from './metas/metas.component';


const routes: Routes = [
  // { path: '', redirectTo: '/estante', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'estante', component: EstanteComponent },
  { path: 'emprestimo', component: EmprestimoComponent },
  { path: 'metas', component: MetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

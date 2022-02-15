import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', component : LoginComponent},
  
  {path : 'pagina-candidaturas', loadChildren : () => import('./pagina-candidaturas/pagina-candidaturas.module').then(m => m.PaginaCandidaturasModule)},

  {path : 'formulario-cadastro', loadChildren : () => import('./formulario-cadastro/formulario-cadastro.module').then(m => m.FormularioCadastroModule)},

  {path : 'definicoes', loadChildren : () => import('./definicoes/definicoes.module').then(m => m.DefinicoesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

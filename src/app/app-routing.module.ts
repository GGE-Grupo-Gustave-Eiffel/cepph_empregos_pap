import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'login', loadChildren : () => import('./login/login.module').then(m => m.LoginModule)},
  
  {path : 'candidaturas', loadChildren : () => import('./pagina-candidaturas/pagina-candidaturas.module').then(m => m.PaginaCandidaturasModule)},

  {path : 'cadastro', loadChildren : () => import('./formulario-cadastro/formulario-cadastro.module').then(m => m.FormularioCadastroModule)},

  {path : 'inscritos', loadChildren : () => import('./pagina-inscritos/pagina-inscritos.module').then(m => m.PaginaInscritosModule)},

  {path : 'criar', loadChildren : () => import('./pagina-criacao-vagas/pagina-criacao-vagas.module').then(m => m.PaginaCriacaoVagasModule)},

  {path : 'definicoes', loadChildren : () => import('./definicoes/definicoes.module').then(m => m.DefinicoesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

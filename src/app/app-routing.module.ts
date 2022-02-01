import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)},
  
  {path : 'pagina-candidaturas', loadChildren : () => import('./pagina-candidaturas/pagina-candidaturas.module').then(m => m.PaginaCandidaturasModule)},

  {path : 'formulario-cadastro', loadChildren : () => import('./formulario-cadastro/formulario-cadastro.module').then(m => m.FormularioCadastroModule)},

  {path : 'definicoes', loadChildren : () => import('./definicoes/definicoes.module').then(m => m.DefinicoesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

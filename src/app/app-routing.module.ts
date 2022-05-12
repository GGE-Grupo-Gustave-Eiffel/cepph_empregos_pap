import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {CanActivate} from "@angular/router";
import { GuardasService } from './guardas/guardas.service';

const routes: Routes = [

  {path : '', component : HomeComponent},

  {path:'login', loadChildren : () => import('./login/login.module').then(m => m.LoginModule)},
  
  //{path : 'definicoes', loadChildren : () => import('./pagina-candidaturas/pagina-candidaturas.module').then(m => m.PaginaCandidaturasModule)},

  {path : 'cadastro/:id', loadChildren : () => import('./formulario-cadastro/formulario-cadastro.module').then(m => m.FormularioCadastroModule)},

  {path : 'inscritos', loadChildren : () => import('./pagina-inscritos/pagina-inscritos.module').then(m => m.PaginaInscritosModule)},

  {
    path : 'criar',  
    // canActivate: [GuardasService],
    loadChildren : () => import('./pagina-criacao-vagas/pagina-criacao-vagas.module').then(m => m.PaginaCriacaoVagasModule)
  },

  {path : 'definicoes', loadChildren : () => import('./definicoes/definicoes.module').then(m => m.DefinicoesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filme-detalhe',
    loadChildren: () => import('./filme-detalhe/filme-detalhe.module').then(m => m.FilmeDetalhePageModule)
  },
  {
    path: 'serie-detalhe',
    loadChildren: () => import('../app/serie-detalhe/serie-detalhe.module').then( m => m.SerieDetalhePageModule)
  },
  {
    path: 'atores-detalhes',
    loadChildren: () => import('./atores-detalhes/atores-detalhes.module').then( m => m.AtoresDetalhesPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab1PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

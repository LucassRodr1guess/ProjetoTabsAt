import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtoresDetalhesPage } from './atores-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: AtoresDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtoresDetalhesPageRoutingModule {}

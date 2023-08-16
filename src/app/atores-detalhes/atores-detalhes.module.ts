import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtoresDetalhesPageRoutingModule } from './atores-detalhes-routing.module';

import { AtoresDetalhesPage } from './atores-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtoresDetalhesPageRoutingModule
  ],
  declarations: [AtoresDetalhesPage]
})
export class AtoresDetalhesPageModule {}

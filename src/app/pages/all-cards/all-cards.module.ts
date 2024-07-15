import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCardsRoutingModule } from './all-cards-routing.module';
import { AllCardsComponent } from './all-cards.component';


@NgModule({
  declarations: [
    AllCardsComponent
  ],
  imports: [
    CommonModule,
    AllCardsRoutingModule
  ]
})
export class AllCardsModule { }

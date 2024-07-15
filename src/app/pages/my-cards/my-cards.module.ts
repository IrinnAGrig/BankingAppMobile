import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCardsRoutingModule } from './my-cards-routing.module';
import { MyCardsComponent } from './my-cards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyCardsComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    MyCardsRoutingModule
  ]
})
export class MyCardsModule { }

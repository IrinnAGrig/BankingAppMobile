import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonCustomComponent } from "./components/button-custom/button-custom.component";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from "@angular/router";
import { CardComponent } from './components/card/card.component';
import { GoBackComponent } from './components/go-back/go-back.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { MiniNavComponent } from './components/mini-nav/mini-nav.component';

@NgModule({
    declarations: [
        ButtonCustomComponent,
        MainLayoutComponent,
        CardComponent,
        GoBackComponent,
        TransactionComponent,
        LineChartComponent,
        MiniNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

    ],
    exports: [
        CommonModule, ButtonCustomComponent, CardComponent, GoBackComponent, TransactionComponent, LineChartComponent, MiniNavComponent
    ]
})
export class SharedModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { AnimationComponent } from './components/animation/animation.component';
import { BlankComponent } from './components/blank/blank.component';
import { BorderComponent } from './components/border/border.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ColorsComponent } from './components/colors/colors.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { OtherComponent } from './components/other/other.component';
import { TablesComponent } from './components/tables/tables.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    BlankComponent,
    BorderComponent,
    ButtonsComponent,
    CardsComponent,
    ChartsComponent,
    ColorsComponent,
    DashboardsComponent,
    OtherComponent,
    TablesComponent,
    FooterComponent,
    SidebarComponent,
    ErrorpageComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

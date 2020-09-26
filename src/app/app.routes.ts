import {RouterModule, Routes} from '@angular/router';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { ColorsComponent } from './components/colors/colors.component';
import { BorderComponent } from './components/border/border.component';
import { AnimationComponent } from './components/animation/animation.component';
import { OtherComponent } from './components/other/other.component';
import { BlankComponent } from './components/blank/blank.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const APP_ROUTES: Routes = [{path: 'dashboards', component: DashboardsComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'colors', component: ColorsComponent},
  {path: 'borders', component: BorderComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'other', component: OtherComponent},
  {path: '404', component: ErrorpageComponent},
  {path: 'blank', component: BlankComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'tables', component: TablesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'dashboards'}
  ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

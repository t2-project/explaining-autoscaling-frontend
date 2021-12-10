import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentsComponent } from './deployments/deployments.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventsComponent } from './events/events.component';
import { MetricsComponent } from './metrics/metrics.component';
import { SetPageComponent } from './set-page/set-page.component';
import { SetsComponent } from './sets/sets.component';

const routes: Routes = [{path: 'event/:id', component: EventPageComponent},
                        {path: '', component: EventsComponent},
                        {path: 'set-detail', component: SetPageComponent},
                        {path: 'sets', component: SetsComponent},
                        {path: 'metrics', component: MetricsComponent},
                        {path: 'deployments', component: DeploymentsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

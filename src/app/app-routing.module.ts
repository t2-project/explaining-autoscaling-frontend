import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './event-page/event-page.component';
import { EventsComponent } from './events/events.component';
import { SetPageComponent } from './set-page/set-page.component';
import { SetsComponent } from './sets/sets.component';

const routes: Routes = [{path: 'event/:id', component: EventPageComponent},
                        {path: '', component: EventsComponent},
                        {path: 'set-detail', component: SetPageComponent},
                        {path: 'sets', component: SetsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

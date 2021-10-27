import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table"
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { EventsService } from './events/event.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventsComponent } from './events/events.component';
import { SetsComponent } from './sets/sets.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventService } from './event/event.service';

export interface adaptionEvent {
  name: string;
  namespace: string;
  createdAt: string;
  reason: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private eventService: EventService) {}
  displayedColumns: string[] = ['createdAt','name', 'namespace', 'reason', 'message']
  dataSource : any;
  title = 'ba-frontend';

  ngAfterViewInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEventList().subscribe((response) => {
      this.dataSource = response;
      console.log(response);
      console.log(this.dataSource);
    })
  }
}

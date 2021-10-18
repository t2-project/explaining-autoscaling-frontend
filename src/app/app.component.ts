import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EventService } from './event/event.service';
export interface adaptionEvent {
  name: string;
  namespace: string;
  createdAt: string;
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
  dataSource = [this.eventService.getEventList()];
  title = 'ba-frontend';
}

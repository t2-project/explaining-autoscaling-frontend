import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

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
  displayedColumns: string[] = ['createdAt','name', 'namespace', 'reason', 'message']
  dataSource = [{name: 'test', namespace: 'default', createdAt: '123', message: 'Pls work!', reason: 'Its broken!'}];
  title = 'ba-frontend';
}

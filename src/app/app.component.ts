import { Component, AfterViewInit, ViewChild } from '@angular/core';

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

}

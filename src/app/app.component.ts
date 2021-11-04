import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface Option {
  value: string;
  viewValue: string;
}

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
  constructor(private router: Router) {}

  options: Option[] = [
    {value: '', viewValue: 'Events'},
    {value: 'sets', viewValue: 'Sets'},
  ]

  navigateTo(value: string) {
    this.router.navigate([value])
  }
}

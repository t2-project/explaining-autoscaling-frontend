import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { adaptionEvent } from "src/app/event-interface";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
eventData: adaptionEvent;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => console.log(params.id))
    this.eventData = history.state.data;
  }

  ngOnInit(): void {
  }

}

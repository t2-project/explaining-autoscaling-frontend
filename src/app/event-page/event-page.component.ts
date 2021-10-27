import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => console.log(params.id))
  }

  ngOnInit(): void {
  }

}

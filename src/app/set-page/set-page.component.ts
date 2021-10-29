import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventSet } from "src/app/event-set-interface";

@Component({
  selector: 'app-set-page',
  templateUrl: './set-page.component.html',
  styleUrls: ['./set-page.component.css']
})
export class SetPageComponent implements OnInit {
setData : EventSet;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => console.log(params.id))
    this.setData = history.state.data;
  }

  ngOnInit(): void {
  }

}

import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventSet } from "src/app/event-set-interface";
import { adaptionEvent } from "src/app/event-interface";

@Component({
  selector: 'app-set-page',
  templateUrl: './set-page.component.html',
  styleUrls: ['./set-page.component.css']
})
export class SetPageComponent implements OnInit {
setData : EventSet;
setName : string;
setNamespace: string;
firstEvent: string;
lastEvent: string;
count: number;
reason: string;
scalingType: string;
events: adaptionEvent[];


  constructor(private route: ActivatedRoute) { 
    this.setData = history.state.data;
    this.initializeSetDetails();
  }

  ngOnInit(): void {
  }

  initializeSetDetails() {
    this.setName = this.setData.name;
    this.setNamespace = this.setData.namespace;
    this.firstEvent = this.setData.firstEvent;
    this.lastEvent = this.setData.lastEvent;
    this.count = this.setData.count;
    this.reason = this.setData.reason;
    this.scalingType = this.setData.scalingType;
    this.events = this.setData.events;
  }
}

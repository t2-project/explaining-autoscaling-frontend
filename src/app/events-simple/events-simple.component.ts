import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { adaptionEvent } from "src/app/event-interface";

@Component({
  selector: 'app-events-simple',
  templateUrl: './events-simple.component.html',
  styleUrls: ['./events-simple.component.css']
})
export class EventsSimpleComponent implements OnInit {
  displayedColumns: string[] = ['createdAt','name', 'metricType', 'scalingType', 'replicaSize']
  dataSource: MatTableDataSource<adaptionEvent>;
  eventList : adaptionEvent[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router) {
    this.eventList = history.state.data.events;
    this.dataSource = new MatTableDataSource(this.eventList);
  }
  

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } }



  selectEvent(event: adaptionEvent) {}


}

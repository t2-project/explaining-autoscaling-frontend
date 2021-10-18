import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['createdAt','name', 'namespace', 'reason', 'message']
  dataSource: MatTableDataSource<adaptionEvent>;
  eventList : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private eventService: EventService) {
    this.loadEvents();
  }
  
  
  title = 'ba-frontend';

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

  loadEvents() {
    this.eventService.getEventList().subscribe((response) => {
      this.eventList = response;
      console.log(response);
      console.log(this.eventList);
      this.dataSource = new MatTableDataSource(this.eventList)
    })
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventsService } from './event.service';

export interface adaptionEvent {
  name: string;
  namespace: string;
  createdAt: string;
  reason: string;
  message: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  displayedColumns: string[] = ['createdAt','name', 'namespace', 'reason', 'message']
  dataSource: MatTableDataSource<adaptionEvent>;
  eventList : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private eventService: EventsService, private router: Router) {
    this.dataSource = new MatTableDataSource();
    this.loadEvents();
  }
  
  
  title = 'ba-frontend';

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadEvents();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } }

  async loadEvents() {
    await this.eventService.getEventList().subscribe((response) => {
      this.eventList = response;
      console.log(response);
      console.log(this.eventList);
      this.dataSource.data = this.eventList; 
    })
  }

  selectEvent(event: object) {
    this.router.navigate(['event/61794f90d004178f39d441b2'])
  }


  

}

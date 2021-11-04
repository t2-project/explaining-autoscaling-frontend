import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SetsService } from './sets.service';

export interface eventSet {
  _id: string;
  name: string;
  namespace: string;
  firstEvent: string;
  lastEvent: string;
  reason: string;
  count: number;
  scalingType: string;
  events: [];
}


@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {
  displayedColumns: string[] = ['firstEvent','latestEvent','name', 'reason', 'count','scalingType']
  dataSource: MatTableDataSource<eventSet>;
  setList : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private setsService : SetsService, private router : Router) {
    this.dataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.loadSets();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } }

  async loadSets() {
    await this.setsService.getSets().subscribe((response) => {
      this.setList = response;
      console.log(response);
      console.log(this.setList);
      this.dataSource.data = this.setList; 
    })
  }

  selectSet(set: eventSet) {
    this.router.navigate(['set-detail'],{state: {data : set}})
  }
}

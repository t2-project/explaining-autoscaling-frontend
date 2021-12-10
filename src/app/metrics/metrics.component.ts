import { Component, OnInit } from '@angular/core';

export interface Metric {
  name: string;
  query: string;
}

const METRICS_DATA: Metric[] =
  [{name: "cpu", query: "container_cpu_usage_seconds"},
    {name: "latency", query: "request_duration"}]


@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'query'];
  dataSource = METRICS_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

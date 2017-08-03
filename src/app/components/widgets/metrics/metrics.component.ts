import { Component, Input, OnInit } from '@angular/core';

import { Metric } from './../../../interfaces/metric.interface';
import { BoardStatus } from './../../../enums/board-status.enum';
import { MetricResultDirection } from './../../../enums/metric-result-direction.enum';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  @Input() data: Metric;

  public metricResultDirections = MetricResultDirection;
  public boardStatuses = BoardStatus;

  constructor() { }

  ngOnInit() { }

  boardClasses() {
    let classes = [];
    classes.push(this.boardStatuses[this.data.status]);
    classes.push('metrics');
    return classes.join(' ');
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { Test } from './../../../interfaces/test.interface';
import { BoardStatus } from './../../../enums/board-status.enum';

@Component({
  selector: 'app-unit-tests',
  templateUrl: './unit-tests.component.html',
  styleUrls: ['./unit-tests.component.scss']
})
export class UnitTestsComponent implements OnInit {

  @Input() data: Test;

  public boardStatuses = BoardStatus;

  constructor() { }

  ngOnInit() { 
    this.data.percentage = Math.ceil((this.data.passed / this.data.total) * 100);
  }

}

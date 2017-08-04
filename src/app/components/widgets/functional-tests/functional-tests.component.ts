import { Component, Input, OnInit } from '@angular/core';

import { Test } from './../../../interfaces/test.interface';
import { BoardStatus } from './../../../enums/board-status.enum';

@Component({
  selector: 'app-functional-tests',
  templateUrl: './functional-tests.component.html',
  styleUrls: ['./functional-tests.component.scss']
})
export class FunctionalTestsComponent implements OnInit {

  public boardStatuses = BoardStatus;

  @Input() data: Test;

  constructor() { }

  ngOnInit() {
    this.data.percent = Math.ceil((this.data.passed / this.data.total) * 100);
  }

}

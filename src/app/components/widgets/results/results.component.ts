import { Component, Input, OnInit } from '@angular/core';

import { BoardItem } from './../../../interfaces/board-item.interface';
import { BoardType } from './../../../enums/board-type.enum';
import { BoardStatus } from './../../../enums/board-status.enum';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public boardStatuses = BoardStatus;
  public boardTypes = BoardType;

  @Input() data: BoardItem;

  constructor() { }

  ngOnInit() { }

}

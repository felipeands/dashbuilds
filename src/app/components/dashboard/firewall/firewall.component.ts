import { Component, Input, OnInit } from '@angular/core';

import { BoardItem } from './../../../interfaces/board-item.interface';
import { BoardStatus } from './../../../enums/board-status.enum';
import { BoardType } from './../../../enums/board-type.enum';

@Component({
  selector: 'app-firewall',
  templateUrl: './firewall.component.html',
  styleUrls: ['./firewall.component.scss']
})
export class FirewallComponent implements OnInit {

  @Input() board: BoardItem;

  public boardStatuses = BoardStatus;
  public boardTypes = BoardType;

  constructor() { }

  ngOnInit() { }

}

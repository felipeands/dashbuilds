import { Component, OnInit } from '@angular/core';

import { BoardItem } from './../../interfaces/board-item.interface';
import { DashboardService } from './../../services/dashboard/dashboard.service';
import { BoardType } from './../../enums/board-type.enum';
import { BoardStatus } from './../../enums/board-status.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private boardItems: BoardItem[];
  public boardTypes = BoardType;
  public boardStatuses = BoardStatus;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.dashboardService.getBoardItems().then((boardItems) => {
      this.boardItems = boardItems;
    })
  }

  boardClasses(board) {
    let classes = [];
    classes.push(this.boardStatuses[board.status]);
    classes.push(this.boardTypes[board.type]);
    return classes.join(' ');
  }

  isBoardActive(board) {
    let result = false;

    switch(this.boardTypes[board.type]) {

      case 'build':
        result = (board.active && board.status !== this.boardStatuses['fail']);
      break;

      case 'firewall':
        result = board.active;
      break;
    }

    return result;
  }

}

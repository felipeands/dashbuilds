import { Component, OnInit } from '@angular/core';

import { BoardItem } from './../../interfaces/board-item.interface';
import { DashboardService } from './../../services/dashboard/dashboard.service';
import { BoardType } from './../../enums/board-type.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private boardItems: BoardItem[];
  public boardTypes = BoardType;

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

}

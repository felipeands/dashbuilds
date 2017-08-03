import { Component, OnInit } from '@angular/core';

import { BoardItem } from './../../interfaces/board-item.interface';
import { DashboardService } from './../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private boardItems: BoardItem[];

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

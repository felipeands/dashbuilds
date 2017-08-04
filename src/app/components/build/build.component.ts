import { Component, Input, OnInit } from '@angular/core';

import { DashboardService } from './../../services/dashboard/dashboard.service';
import { BoardItem } from './../../interfaces/board-item.interface';
import { BoardStatus } from './../../enums/board-status.enum';
import { BoardType } from './../../enums/board-type.enum';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  @Input() board: BoardItem;

  private openBoardSubscribe: any;
  public boardStatuses = BoardStatus;
  public boardTypes = BoardType;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.openBoardSubscribe = this.dashboardService.getOpenBoard().subscribe((board) => {
      if (board !== this.board) {
        this.board.active = false;
      }
    });
   }

  onClickBoard() {

    switch (this.board.type) {

      case this.boardTypes['firewall']:
        this.board.active = !this.board.active;
        this.dashboardService.onOpenBoard(this.board);
        break;

      case this.boardTypes['build']:
        if (this.board.status !== this.boardStatuses['fail']) {
          this.board.active = !this.board.active;
          this.dashboardService.onOpenBoard(this.board);
        }
        break;

    }

  }

  onDisplayDetails(widget) {
    alert('click widget ' + widget);
  } 

}

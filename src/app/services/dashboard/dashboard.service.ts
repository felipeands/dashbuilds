import { Injectable, EventEmitter, Output } from '@angular/core';

import { BoardItem } from './../../interfaces/board-item.interface';
import { DASHBOARD_ITEMS } from './dashboard.mock';

@Injectable()
export class DashboardService {

  @Output() openBoard: EventEmitter<BoardItem> = new EventEmitter();

  constructor() { }

  getBoardItems(): Promise<BoardItem[]> {
    return Promise.resolve(DASHBOARD_ITEMS);
  }

  onOpenBoard(board) {
    this.openBoard.emit(board);
  }

  getOpenBoard() {
    return this.openBoard;
  }

}

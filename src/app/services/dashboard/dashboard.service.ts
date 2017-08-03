import { Injectable } from '@angular/core';

import { BoardItem } from './../../interfaces/board-item.interface';
import { DASHBOARD_ITEMS } from './dashboard.mock';

@Injectable()
export class DashboardService {

  constructor() { }

  getBoardItems(): Promise<BoardItem[]> {
    return Promise.resolve(DASHBOARD_ITEMS);
  }

}

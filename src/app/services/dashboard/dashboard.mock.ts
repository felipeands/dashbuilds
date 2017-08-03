import { BoardItem } from './../../interfaces/board-item.interface';
import { Widgets } from './../../interfaces/widgets.interface';

import { BoardType } from './../../enums/board-type.enum';
import { BoardStatus } from './../../enums/board-status.enum';
import { MetricResultDirection } from './../../enums/metric-result-direction.enum';







// board1 
const board1 = {
  id: 'Terrain01',
  type: BoardType.build,
  owner: 'Felipe A',
  startDateTime: '2017-07-25 10:18',
  status: BoardStatus.fail,
  data: <Widgets>{

    // metrics widget
    metric: {
      status: BoardStatus.succeed,
      items: [
        { name: 'Test', value: 64, direction: MetricResultDirection.up },
        { name: 'Maintanability', value: 53, direction: MetricResultDirection.up },
        { name: 'Security', value: 64, direction: MetricResultDirection.right },
        { name: 'Workmanship', value: 72, direction: MetricResultDirection.right }
      ]
    },

    // versions widget
    version: { status: BoardStatus.succeed, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.succeed, passed: 14, total: 18 },

    // functional tests widget
    functionalTest: { status: BoardStatus.succeed, passed: 1850, total: 2300, }

  },
  active: false
};






// board2 
const board2 = {
  id: 'Air03',
  type: BoardType.firewall,
  owner: 'Felipe A',
  startDateTime: '2017-07-26 11:21',
  status: BoardStatus.fail,
  data: <Widgets>{

    // metrics widget
    metric: {
      status: BoardStatus.succeed,
      items: [
        { name: 'Test', value: 64, direction: MetricResultDirection.up },
        { name: 'Maintanability', value: 23, direction: MetricResultDirection.down },
        { name: 'Security', value: 84, direction: MetricResultDirection.right },
        { name: 'Workmanship', value: 12, direction: MetricResultDirection.left }
      ]
    },

    // versions widget
    version: { status: BoardStatus.fail, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.fail, passed: 1, total: 3 },

    // functional tests widget
    functionalTest: { status: BoardStatus.fail, passed: 33, total: 55, }

  },
  active: false
};







export const DASHBOARD_ITEMS: BoardItem[] = [
  board1,
  board2
];
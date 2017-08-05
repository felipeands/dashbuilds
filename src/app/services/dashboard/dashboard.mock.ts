import { BoardItem } from './../../interfaces/board-item.interface';
import { Widgets } from './../../interfaces/widgets.interface';
import { Result } from './../../interfaces/result.interface';

import { BoardType } from './../../enums/board-type.enum';
import { BoardStatus } from './../../enums/board-status.enum';
import { MetricResultDirection } from './../../enums/metric-result-direction.enum';


// board1 - BUILD - SUCCESS
const board1 = {
  id: 'Terrain01',
  type: BoardType.build,
  owner: 'Felipe A',
  startDateTime: '2017-07-25 10:18',
  status: BoardStatus.succeed,
  data: <Widgets>{

    // metrics widget
    metric: {
      status: BoardStatus.succeed,
      items: [
        { name: 'Test', value: 64, direction: MetricResultDirection.up },
        { name: 'Maintanability', value: 53, direction: MetricResultDirection.up },
        { name: 'Security', value: 64, direction: MetricResultDirection.up },
        { name: 'Workmanship', value: 72, direction: MetricResultDirection.down }
      ]
    },

    // versions widget
    version: { status: BoardStatus.succeed, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.succeed, passed: 18, total: 18 },

    // functional tests widget
    functionalTest: { status: BoardStatus.succeed, passed: 2300, total: 2300, }

  },
  result: <Result> {
    title: 'Build',
    subTitle: 'Success',
    buttonText: 'View',
    buttonTarget: 'http://www.google.com'
  }
};






// board2 - BUILD - FAIL
const board2 = {
  id: 'Air03',
  type: BoardType.build,
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
    version: { status: BoardStatus.succeed, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.fail, passed: 1, total: 3 },

    // functional tests widget
    functionalTest: { status: BoardStatus.fail, passed: 33, total: 55, }

  }
};






// board3 - BUILD - BUILDING
const board3 = {
  id: 'Air 03 - BR',
  type: BoardType.build,
  owner: 'Felipe A',
  startDateTime: '2017-07-26 11:21',
  status: BoardStatus.running,
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
    version: { status: BoardStatus.running, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.waiting, passed: 0, total: 3 },

    // functional tests widget
    functionalTest: { status: BoardStatus.waiting, passed: 0, total: 55, }

  }
};









// board4 - FIREWALL - SUCCESS
const board4 = {
  id: 'Mars 42x Tom',
  type: BoardType.firewall,
  owner: 'Felipe A',
  startDateTime: '2017-07-25 10:18',
  status: BoardStatus.accepted,
  data: <Widgets>{

    // metrics widget
    metric: {
      status: BoardStatus.succeed,
      items: [
        { name: 'Test', value: 64, direction: MetricResultDirection.up },
        { name: 'Maintanability', value: 53, direction: MetricResultDirection.up },
        { name: 'Security', value: 64, direction: MetricResultDirection.up },
        { name: 'Workmanship', value: 72, direction: MetricResultDirection.down }
      ]
    },

    // versions widget
    version: { status: BoardStatus.succeed, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.succeed, passed: 11, total: 11 },

    // functional tests widget
    functionalTest: { status: BoardStatus.succeed, passed: 114, total: 114, }

  }
};






// board5 - FIREWALL - FAIL
const board5 = {
  id: 'Air05',
  type: BoardType.firewall,
  owner: 'Felipe A',
  startDateTime: '2017-07-26 11:21',
  status: BoardStatus.rejected,
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
    version: { status: BoardStatus.succeed, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.succeed, passed: 1, total: 3 },

    // functional tests widget
    functionalTest: { status: BoardStatus.fail, passed: 33, total: 55, }

  }
};






// board6 - FIREWALL - RUNNING
const board6 = {
  id: 'Goland 006',
  type: BoardType.firewall,
  owner: 'Felipe A',
  startDateTime: '2017-07-26 11:21',
  status: BoardStatus.running,
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
    version: { status: BoardStatus.running, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

    // unit tests widget
    unitTest: { status: BoardStatus.waiting, passed: 0, total: 3 },

    // functional tests widget
    functionalTest: { status: BoardStatus.waiting, passed: 0, total: 55, }

  }
};







export const DASHBOARD_ITEMS: BoardItem[] = [
  board1,
  board2,
  board3,
  board4,
  board5,
  board6
];
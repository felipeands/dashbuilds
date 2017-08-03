import { BoardItem } from './../../interfaces/board-item.interface';

// board1 
const board1 =
  {
    id: 'Terror1',
    type: 1,
    owner: 'Felipe A',
    startDateTime: '2017-07-25 10:18',
    status: 1,
    data: [

      // metrics widget
      {
        status: 1,
        items: [
          { name: 'Test', value: 64, direction: 1 },
          { name: 'Maintanability', value: 53, direction: 1 },
          { name: 'Security', value: 64, direction: 3 },
          { name: 'Workmanship', value: 72, direction: 3 }
        ]
      },

      // versions widget
      { status: 2, items: ['Debug', 'Release'], dateTime: '2017-07-26 13:00' },

      // unit tests widget
      // { status: 1, total: 18, passed: 15 },

      // functional tests widget
      { status: 1, total: 2300, passed: 1850 }

    ],
    active: false
  };

export const DASHBOARD_ITEMS: BoardItem[] = [
  board1
];
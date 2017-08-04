import { Widgets } from './widgets.interface';
import { Result } from './result.interface';
import { BoardType } from './../enums/board-type.enum';
import { BoardStatus } from './../enums/board-status.enum';

export interface BoardItem {
  id: string,
  type: BoardType,
  owner: string,
  startDateTime: string,
  status: BoardStatus,
  data?: Widgets,
  active?: boolean,
  result?: Result
}

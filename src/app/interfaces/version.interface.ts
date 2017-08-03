import { BoardStatus } from './../enums/board-status.enum';

export interface Version {
  status: BoardStatus,
  items: string[],
  dateTime: string
}

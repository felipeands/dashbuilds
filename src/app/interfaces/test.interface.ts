import { BoardStatus } from './../enums/board-status.enum';

export interface Test {
  status: BoardStatus,
  passed: number,
  total: number,
  percentage?: number
}

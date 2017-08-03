import { MetricResult } from './metric-result.interface';
import { BoardStatus } from './../enums/board-status.enum';

export interface Metric {
  status: BoardStatus,
  items: MetricResult[]
}

import { MetricResult } from './metric-result.interface';

export interface Metric {
  status: number,
  items: MetricResult[]
}

import { MetricResultDirection } from './../enums/metric-result-direction.enum';

export interface MetricResult {
  name: string,
  value: number,
  direction: MetricResultDirection
}

import { Metric } from './metric.interface';
import { Version } from './version.interface';
import { Test } from './test.interface';

export interface Widgets {
  metric?: Metric,
  version?: Version,
  unitTest?: Test,
  functionalTest?: Test
}

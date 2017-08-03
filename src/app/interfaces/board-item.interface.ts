import { Widgets } from './widgets.interface';

export interface BoardItem {
  id: string,
  type: number,
  owner: string,
  startDateTime: string,
  status: number,
  data?: Widgets,
  active?: boolean,
  resultTitle?: string,
  resultSubtitle?: string
}

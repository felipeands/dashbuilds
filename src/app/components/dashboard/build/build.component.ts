import { Component, Input, OnInit } from '@angular/core';

import { BoardItem } from './../../../interfaces/board-item.interface';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  @Input() board: BoardItem;

  constructor() { }

  ngOnInit() {
  }

}

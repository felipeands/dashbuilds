import { Component, Input, OnInit } from '@angular/core';

import { Version } from './../../../interfaces/version.interface';
import { BoardStatus } from './../../../enums/board-status.enum';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {

  @Input() data: Version;

  public boardStatuses = BoardStatus; 

  constructor() { }

  ngOnInit() { }

}

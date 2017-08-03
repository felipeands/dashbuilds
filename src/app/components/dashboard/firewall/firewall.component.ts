import { Component, Input, OnInit } from '@angular/core';

import { BoardItem } from './../../../interfaces/board-item.interface';

@Component({
  selector: 'app-firewall',
  templateUrl: './firewall.component.html',
  styleUrls: ['./firewall.component.scss']
})
export class FirewallComponent implements OnInit {

  @Input() board: BoardItem;

  constructor() { }

  ngOnInit() {
  }

}

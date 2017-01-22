import { Component, OnInit } from '@angular/core';

import { Warning } from './warning.model';

@Component({
  selector: 'warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warning: Warning;

  constructor() { }

  ngOnInit() {
    this.warning = new Warning();
  }

}

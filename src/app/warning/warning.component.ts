import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Warning } from '../models/warning.model';

@Component({
  selector: 'warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  warning: Warning;

  constructor(private store: CentralStoreService) {
    this.store = store;
  }

  ngOnInit() {
    this.warning = this.store.getWarning();
  }

}

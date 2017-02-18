import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Estate } from '../models/estate.model';

@Component({
  selector: 'estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  estate: Estate;
  expanded: boolean;

  constructor(
    private store: CentralStoreService
  ) { }

  ngOnInit() {
    this.estate = this.store.getEstate();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}

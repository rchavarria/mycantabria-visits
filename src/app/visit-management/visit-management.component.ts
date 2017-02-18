import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Visit } from '../models/visit.model';

@Component({
  selector: 'visit-management',
  templateUrl: './visit-management.component.html',
  styleUrls: ['./visit-management.component.css']
})
export class VisitManagementComponent implements OnInit {
  visit: Visit;
  expanded: boolean;

  constructor(private store: CentralStoreService) {
    this.store = store;
    this.expanded = false;
  }

  ngOnInit() {
    this.visit = this.store.getVisit();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}

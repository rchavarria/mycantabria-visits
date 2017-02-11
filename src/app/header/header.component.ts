import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Company } from '../models/company.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  company: Company;

  constructor(private store: CentralStoreService) {
    this.store = store;
  }

  ngOnInit() {
    this.company = this.store.getHeader();
  }

}

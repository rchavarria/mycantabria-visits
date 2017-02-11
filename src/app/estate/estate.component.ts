import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Address } from '../models/address.model';
import { Amount } from '../models/amount.model';
import { Owner } from '../models/owner.model';
import { Estate } from '../models/estate.model';

@Component({
  selector: 'estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  estate: Estate;

  constructor(private store: CentralStoreService) {
    this.store = store;
  }

  ngOnInit() {
    this.estate = this.store.getEstate();
  }

}

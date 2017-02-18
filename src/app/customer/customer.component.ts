import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Customer } from '../models/customer.model';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  expanded: boolean;

  constructor(private store: CentralStoreService) {
    this.store = store;
  }

  ngOnInit() {
    this.customer = this.store.getCustomer();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

}

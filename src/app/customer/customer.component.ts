import { Component, OnInit } from '@angular/core';

import { Customer } from './customer.model';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor() { }

  ngOnInit() {
    this.customer = new Customer(
      '2719',
      'Sheila',
      '12344321234',
      'sheilaher1981@hotmail.com'
    );
  }

}

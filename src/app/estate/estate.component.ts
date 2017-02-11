import { Component, OnInit } from '@angular/core';

import { Address } from '../models/address.model';
import { Amount } from './amount.model';
import { Owner } from './owner.model';
import { Estate } from './estate.model';

@Component({
  selector: 'estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OnInit {
  estate: Estate;

  constructor() { }

  ngOnInit() {
    const address: Address = new Address(
      'Avenida Pikolo, 14',
      43220,
      'Kaito',
      'Freezer'
    );

    const amount = new Amount(400, '€');

    const owner = new Owner('Krilin');

    this.estate = new Estate(
      '12344321',
      address,
      amount,
      owner
    );
  }

}

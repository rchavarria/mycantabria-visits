import { Component, OnInit } from '@angular/core';

import { Address } from '../header/address.model';
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
      'Calle Dalí, 8',
      19162,
      'Pioz',
      'Cantabria'
    );

    const amount = new Amount(400, '€');

    const owner = new Owner('Juana la loca');

    this.estate = new Estate(
      '12344321',
      address,
      amount,
      owner
    );
  }

}

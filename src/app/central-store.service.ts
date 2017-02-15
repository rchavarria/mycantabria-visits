import { Injectable } from '@angular/core';

import { Address } from './models/address.model';
import { Amount } from './models/amount.model';
import { Company } from './models/company.model';
import { Customer } from './models/customer.model';
import { Estate } from './models/estate.model';
import { Footer } from './models/footer.model';
import { Owner } from './models/owner.model';
import { Person } from './models/person.model';
import { Signature } from './models/signature.model';
import { Visit } from './models/visit.model';
import { Warning } from './models/warning.model';

@Injectable()
export class CentralStoreService {

  constructor() { }

  getHeader() {
    const address = new Address(
      'Urb. Los Rosales, 1, Oficina 1',
      39620,
      'Sarón',
      'Cantabria'
    );

    const company = new Company(
      'MyCantabria Inmobiliaria',
      address,
      './assets/img/logo.png',
      '942 517 691',
      'info@mycantabria.com'
    );

    return company;
  }

  getCustomer() {
    return new Customer(
      '4321',
      'Maestro tortuga',
      'Isla tortuga',
      'bulma@hotmail.com'
    );
  }

  getEstate() {
    const address: Address = new Address(
      'Avenida Pikolo, 14',
      43220,
      'Kaito',
      'Freezer'
    );

    const amount = new Amount(400, '€');

    const owner = new Owner('Krilin');

    return new Estate(
      '12344321',
      address,
      amount,
      owner
    );
  }

  getFooter() {
    return new Footer();
  }

  getSignature(name) {
    return new Signature(new Person(name));
  }

  getVisit() {
    const agent = new Person('Son Goku');

    return new Visit(
      new Date(),
      new Date(),
      'Vegeta y Hermano Goku',
      agent
    );
  }

  getWarning() {
    return new Warning();
  }

}

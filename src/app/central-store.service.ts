import { Injectable } from '@angular/core';

import { Address } from './models/address.model';
import { Company } from './models/company.model';

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

}

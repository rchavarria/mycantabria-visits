import { Component, OnInit } from '@angular/core';
import { Address } from './address.model';
import { Company } from './company.model';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  company: Company;

  constructor() { }

  ngOnInit() {
    const address = new Address(
      'Urb. Los Rosales, 1, Oficina 1',
      39620,
      'Sarón',
      'Cantabria'
    );

    this.company = new Company(
      'MyCantabria Inmobiliaria',
      address,
      '/assets/logo.png',
      '942 517 691',
      'info@mycantabria.com'
    );
  }

}

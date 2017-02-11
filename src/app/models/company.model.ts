
import { Address } from './address.model';

export class Company {
  name: string;
  address: Address;
  logoUrl: string;
  phone: string;
  email: string;

  constructor(
    name: string,
    address: Address,
    logoUrl: string,
    phone: string,
    email: string
  ) {
    this.name = name;
    this.address = address;
    this.logoUrl = logoUrl;
    this.phone = phone;
    this.email = email;
  }

}


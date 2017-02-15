
import { Address } from './address.model';

export class Customer {
  documentId: string;
  signupDate: Date;
  address: Address;
  phone2: string;
  phone3: string;
  fax: string;

  constructor(
    public id: string,
    public name: string,
    public mainPhone: string,
    public email: string
  ) {
    this.signupDate = new Date();
  }
}


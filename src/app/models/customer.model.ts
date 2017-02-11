
import { Address } from './address.model';

export class Customer {
  id: string;
  name: string;
  documentId: string;
  signupDate: Date;
  address: Address;
  mainPhone: string;
  email: string;
  phone2: string;
  phone3: string;
  fax: string;

  constructor(
    id: string,
    name: string,
    mainPhone: string,
    email: string
  ) {
    this.id = id;
    this.name = name;
    this.mainPhone = mainPhone;
    this.email = email;

    this.signupDate = new Date();
  }
}



import { Address } from './address.model';

export class Company {

  constructor(
    public name: string,
    public address: Address,
    public logoUrl: string,
    public phone: string,
    public email: string
  ) { }

}


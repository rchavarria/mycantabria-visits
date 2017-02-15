
import { Address } from './address.model';
import { Amount } from './amount.model';
import { Person } from './person.model';

export class Estate {
  id: string;
  address: Address;
  monthlyAmount: Amount;
  owner: Person;

  constructor(
    id: string,
    address: Address,
    monthlyAmount: Amount,
    owner: Person
  ) {
    this.id = id;
    this.address = address;
    this.monthlyAmount = monthlyAmount;
    this.owner = owner;
  }

}


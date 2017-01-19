
import { Address } from '../header/address.model';
import { Amount } from './amount.model';
import { Owner } from './owner.model';

export class Estate {
  id: string;
  address: Address;
  monthlyAmount: Amount;
  owner: Owner;

  constructor(
    id: string,
    address: Address,
    monthlyAmount: Amount,
    owner: Owner
  ) {
    this.id = id;
    this.address = address;
    this.monthlyAmount = monthlyAmount;
    this.owner = owner;
  }

}


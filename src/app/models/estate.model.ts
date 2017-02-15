
import { Address } from './address.model';
import { Amount } from './amount.model';
import { Person } from './person.model';

export class Estate {

  constructor(
    public id: string,
    public address: Address,
    public monthlyAmount: Amount,
    public owner: Person
  ) { }

}



import { Person } from './person.model';

export class Visit {

  constructor(
    public date: Date,
    public time: Date,
    public subject: string,
    public agent: Person
  ) { }

}


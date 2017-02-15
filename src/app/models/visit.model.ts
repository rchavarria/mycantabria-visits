
import { Person } from './person.model';

export class Visit {
  date: Date;
  time: Date;
  subject: string;
  agent: Person;

  constructor(
    date: Date,
    time: Date,
    subject: string,
    agent: Person
  ) {
    this.date = date;
    this.time = time;
    this.subject = subject;
    this.agent = agent;
  }

}


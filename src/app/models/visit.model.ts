  
import { Agent } from './agent.model';

export class Visit {
  date: Date;
  time: Date;
  subject: string;
  agent: Agent;

  constructor(
    date: Date,
    time: Date,
    subject: string,
    agent: Agent
  ) {
    this.date = date;
    this.time = time;
    this.subject = subject;
    this.agent = agent;
  }

}


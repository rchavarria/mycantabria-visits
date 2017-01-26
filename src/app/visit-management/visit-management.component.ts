import { Component, OnInit } from '@angular/core';

import { Agent } from './agent.model';
import { Visit } from './visit.model';

@Component({
  selector: 'visit-management',
  templateUrl: './visit-management.component.html',
  styleUrls: ['./visit-management.component.css']
})
export class VisitManagementComponent implements OnInit {
  visit: Visit;

  constructor() { }

  ngOnInit() {
    const agent = new Agent('Son Goku');

    this.visit = new Visit(
      new Date(),
      new Date(),
      'Vegeta y Hermano Goku',
      agent
    );
  }

}

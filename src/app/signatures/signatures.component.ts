import { Component, OnInit } from '@angular/core';

import { Signature } from './signature.model';
import { Person } from './person.model';

@Component({
  selector: 'signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent implements OnInit {
  private agentSignature: Signature;
  private clientSignature: Signature;

  constructor() { }

  ngOnInit() {
    this.agentSignature = new Signature(new Person('Son Gohan'));
    this.clientSignature = new Signature(new Person('Booboo'));
  }

}

import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Signature } from '../models/signature.model';

@Component({
  selector: 'signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.css']
})
export class SignaturesComponent implements OnInit {
  private agentSignature: Signature;
  private clientSignature: Signature;

  constructor(private store: CentralStoreService) {
    this.store = store;
  }

  ngOnInit() {
    this.agentSignature = this.store.getSignature('Son Gohan');
    this.clientSignature = this.store.getSignature('Booboo');
  }

}

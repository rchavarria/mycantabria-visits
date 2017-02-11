import { Component, OnInit } from '@angular/core';

import { CentralStoreService } from '../central-store.service';

import { Footer } from '../models/footer.model';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer: Footer;

  constructor(private store: CentralStoreService) {
    this.store = store;
  }

  ngOnInit() {
    this.footer = this.store.getFooter();
  }

}

import { Component, OnInit } from '@angular/core';

import { Footer } from './footer.model';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer: Footer;

  constructor() { }

  ngOnInit() {
    this.footer = new Footer();
  }

}

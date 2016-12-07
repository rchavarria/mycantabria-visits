import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    const padOptions = {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      penColor: 'rgb(0, 0, 0)'
    }

    // TODO Encapsulate this a bit more
    const canvas = this.el.nativeElement.getElementsByTagName('canvas')[0];
    var signaturePad = new SignaturePad(canvas, padOptions);
  }

}

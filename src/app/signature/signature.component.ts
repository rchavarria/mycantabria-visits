import { Component, OnInit, Input, ElementRef } from '@angular/core';

import * as SignaturePad from 'signature_pad';

import { Signature } from '../signatures/signature.model';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  @Input() agent: string;
  @Input() model: Signature;
  private el: ElementRef;

  pad: any;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    const canvas = this.firstCanvasInComponent();
    this.pad = new SignaturePad(canvas, this.buildPadOptions());
  }

  private firstCanvasInComponent() {
    const selector = 'canvas';
    const allCanvas = this.el.nativeElement.getElementsByTagName(selector);
    return allCanvas[0];
  }

  private buildPadOptions() {
    const padOptions = {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      penColor: 'rgb(0, 0, 0)'
    }

    return padOptions;
  }

}

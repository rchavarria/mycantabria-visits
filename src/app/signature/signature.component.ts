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
    //
    // /!\ fix width and height so that there is no zoom effect (described in issue #18) /!\
    //
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

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

  getImage(event) {
    const imageAsPng = this.pad.toDataURL();

    const w = window.open('', 'Imagen');
    w.document.write(`<img src="${imageAsPng}"/>`);
  }

  reset(event) {
    this.pad.clear();
  }

}

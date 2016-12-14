/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { SignatureComponent } from './signature.component';

import * as SignaturePad from 'signature_pad';

describe('Component: Signature', () => {

  function buildComponentHTMLElements() {
    const div = document.createElement('div');
    const canvas = document.createElement('canvas');
    div.appendChild(canvas);

    return new ElementRef(div);
  }

  it('should create an instance', () => {
    let component = new SignatureComponent();
    expect(component).toBeTruthy();
  });

  it('there is no pad by default', () => {
    const component = new SignatureComponent(null);
    expect(component.pad).toBeUndefined();
  });

  it('creates a pad from an element on init', () => {
    const el = buildComponentHTMLElements();
    const component = new SignatureComponent(el);

    component.ngOnInit();

    expect(component.pad).toBeDefined();
  });

});

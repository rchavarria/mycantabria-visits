/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Component: Header', () => {

  it('should create an instance', () => {
    let component = new HeaderComponent();
    expect(component).toBeTruthy();
  });

  it('initializes the company model on init', () => {
    const component = new HeaderComponent();
    component.ngOnInit();

    expect(component.company).toBeTruthy();
    expect(component.company.address).toBeTruthy();
  });

});

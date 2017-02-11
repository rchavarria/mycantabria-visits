/* tslint:disable:no-unused-variable */

import { Address } from './address.model';

describe('Model: Address', () => {

  it('should create an empty instance', () => {
    let address = new Address();
    expect(address).toBeTruthy();
  });

  it('creates an instance from a regular object', () => {
    const address: Address = new Address(
      'Foo',
      12345,
      'A city',
      'A province'
    );

    expect(address instanceof Address).toBeTruthy();
  });

});

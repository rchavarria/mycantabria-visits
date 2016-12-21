/* tslint:disable:no-unused-variable */

import { Address } from './address.model';
import { Company } from './company.model';

describe('Model: Company', () => {

  it('should create an empty instance', () => {
    let company = new Company();
    expect(company).toBeTruthy();
  });

  it('creates an instance from a regular object', () => {
    const address: Address = new Address(
      'Foo',
      12345,
      'A city',
      'A province'
    );

    const company: Company = new Company(
      'A company',
      address,
      '/assets/some-logo.png',
      '910 10 50 10',
      'info@example.com'
    );

    expect(company instanceof Company).toBeTruthy();
  });

});

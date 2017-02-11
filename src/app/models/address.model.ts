
export class Address {
  street: string;
  postalCode: number;
  city: string;
  province: string;

  constructor(
    street: string,
    postalCode: number,
    city: string,
    province: string
  ) {
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.province = province;
  }

}


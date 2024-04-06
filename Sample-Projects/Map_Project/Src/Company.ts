// creating company class with the constructor that get data from the faker

import faker from "faker";

export class Company {
  Name: string;
  Banner: string;
  Address: {
    longitude: number;
    latitude: number;
  };

  constructor() {
    this.Name = faker.company.companyName();
    this.Banner = faker.company.catchPhrase();
    this.Address = {
      longitude: parseFloat(faker.address.longitude()),
      latitude: parseFloat(faker.address.latitude()),
    };
  }
}

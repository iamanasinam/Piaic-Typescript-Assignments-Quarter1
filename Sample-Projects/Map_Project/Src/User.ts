// making the user class that take the data from the faker
// first importing faker

// do professional commenting in it

import faker from "faker";

// then creating the user class and adding the value by faker in constructor

export class User {
  Name: string;
  Address: {
    longitude: number;
    latitude: number;
  };

  constructor() {
    this.Name = faker.name.firstName();
    this.Address = {
      longitude: parseFloat(faker.address.longitude()),
      latitude: parseFloat(faker.address.latitude()),
    };
  }
}

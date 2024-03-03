import { faker } from '@faker-js/faker';

export class Company {
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
    <div>
      <h1>Company name: ${this.companyName}</h1>
      <h3>Catch phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
  color: string = 'red';
}

import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'addresses' })
export class AddressEntity {
  @ObjectIdColumn({ name: '_id' })
  uid: string;

  @Column()
  id: number;

  @Column()
  city: string;

  @Column({ name: 'street_name' })
  streetName: string;

  @Column({ name: 'street_address' })
  streetAddress: string;

  @Column({ name: 'secondary_address' })
  secondaryAddress: string;

  @Column({ name: 'building_number' })
  buildingNumber: string;

  @Column({ name: 'mail_box' })
  mailBox: string;

  @Column()
  community: string;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column()
  zip: string;

  @Column({ name: 'postcode' })
  postCode: string;

  @Column({ name: 'time_zone' })
  timeZone: string;

  @Column({ name: 'street_suffix' })
  streetSuffix: string;

  @Column({ name: 'city_suffix' })
  citySuffix: string;

  @Column({ name: 'city_prefix' })
  cityPrefix: string;

  @Column()
  state: string;

  @Column({ name: 'state_abbr' })
  stateAbbr: string;

  @Column()
  country: string;

  @Column({ name: 'country_code' })
  countryCode: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column({ name: 'full_address' })
  fullAddress: string;
}

import { Field, ID, ObjectType } from 'type-graphql';
import 'reflect-metadata';
import { User } from './user';

export interface Address {
  id: number;
  uid: string;
  city: string;
  streetName: string;
  streetAddress: string;
  secondaryAddress: string;
  buildingNumber: string;
  mailBox: string;
  community: string;
  zipCode: string;
  zip: string;
  postCode: string;
  timeZone: string;
  streetSuffix: string;
  citySuffix: string;
  cityPrefix: string;
  state: string;
  stateAbbr: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  fullAddress: string;
}

@ObjectType()
export class PhysicalAddress implements Address {
  @Field()
  id: number;

  @Field(() => ID)
  uid: string;

  @Field()
  city: string;

  @Field()
  streetName: string;

  @Field()
  streetAddress: string;

  @Field()
  secondaryAddress: string;

  @Field()
  buildingNumber: string;

  @Field()
  mailBox: string;

  @Field()
  community: string;

  @Field()
  zipCode: string;

  @Field()
  zip: string;

  @Field()
  postCode: string;

  @Field()
  timeZone: string;

  @Field()
  streetSuffix: string;

  @Field()
  citySuffix: string;

  @Field()
  cityPrefix: string;

  @Field()
  state: string;

  @Field()
  stateAbbr: string;

  @Field()
  country: string;

  @Field()
  countryCode: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  fullAddress: string;

  @Field(() => [User])
  users: User[];
}

import { Field, ID, ObjectType } from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export class Address {
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
}

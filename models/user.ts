import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UserCoordinates {
  @Field()
  lat: number;

  @Field()
  lng: number;
}

@ObjectType()
export class UserAddress {
  @Field()
  city: string;

  @Field()
  streetName: string;

  @Field()
  streetAddress: string;

  @Field()
  zipCode: string;

  @Field()
  state: string;

  @Field()
  country: string;

  @Field()
  coordinates: UserCoordinates;
}

@ObjectType()
export class UserCreditCard {
  @Field()
  ccNumber: string;
}

@ObjectType()
export class UserEmployment {
  @Field()
  title: string;

  @Field()
  keySkill: string;
}

@ObjectType()
export class UserSubscription {
  @Field()
  plan: string;

  @Field()
  status: string;

  @Field()
  paymentMethod: string;

  @Field()
  term: string;
}

@ObjectType()
export class User {
  @Field((_) => ID)
  uid: string;

  @Field()
  id: number;

  @Field()
  password: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  avatar: string;

  @Field()
  gender: string;

  @Field()
  phoneNumber: string;

  @Field()
  socialInsuranceNumber: string;

  @Field()
  dateOfBirth: Date;

  @Field()
  employment: UserEmployment;

  @Field()
  address: UserAddress;

  @Field()
  creditCard: UserCreditCard;

  @Field()
  subscription: UserSubscription;
}

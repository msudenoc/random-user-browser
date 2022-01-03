import { Column, Entity, ObjectIdColumn } from 'typeorm';

export class UserCoordinates {
  @Column()
  lat: number;

  @Column()
  lng: number;
}

export class UserAddress {
  @Column()
  city: string;

  @Column({ name: 'street_name' })
  streetName: string;

  @Column({ name: 'street_address' })
  streetAddress: string;

  @Column({ name: 'zip_code' })
  zipCode: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  coordinates: UserCoordinates;
}

export class UserCreditCard {
  @Column({ name: 'cc_number' })
  ccNumber: string;
}

export class UserEmployment {
  @Column()
  title: string;

  @Column({ name: 'key_skill' })
  keySkill: string;
}

export class UserSubscription {
  @Column()
  plan: string;

  @Column()
  status: string;

  @Column({ name: 'payment_method' })
  paymentMethod: string;

  @Column()
  term: string;
}

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn({ name: '_id' })
  uid: string;

  @Column()
  id: number;

  @Column()
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  avatar: string;

  @Column()
  gender: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column({ name: 'social_insurance_number' })
  socialInsuranceNumber: string;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: Date;

  @Column(() => UserEmployment)
  employment: UserEmployment;

  @Column(() => UserAddress)
  address: UserAddress;

  @Column(() => UserCreditCard)
  creditCard: UserCreditCard;

  @Column(() => UserSubscription)
  subscription: UserSubscription;
}

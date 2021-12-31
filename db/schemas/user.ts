import { mongoose } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import {
  User,
  UserAddress,
  UserCoordinates,
  UserCreditCard,
  UserEmployment,
  UserSubscription,
} from '../../models/user';

const employmentSchema = new Schema<any, UserEmployment>({
  title: String,
  key_skill: {
    type: String,
    alias: 'keySkill',
  },
});

const coordsSchema = new Schema<any, UserCoordinates>({
  lat: Number,
  lng: Number,
});

const addressSchema = new Schema<any, UserAddress>({
  city: String,
  street_name: {
    type: String,
    alias: 'streetName',
  },
  street_address: {
    type: String,
    alias: 'streetAddress',
  },
  zip_code: {
    type: String,
    alias: 'zipCode',
  },
  state: String,
  country: String,
  coordinates: coordsSchema,
});

const ccSchema = new Schema<any, UserCreditCard>({
  cc_number: {
    type: String,
    alias: 'ccNumber',
  },
});

const subscriptionSchema = new Schema<any, UserSubscription>({
  plan: String,
  status: String,
  payment_method: {
    type: String,
    alias: 'paymentMethod',
  },
  term: String,
});

const userSchema = new Schema<any, User>({
  _id: {
    type: String,
    alias: 'uid',
  },
  id: Number,
  password: String,
  first_name: {
    type: String,
    alias: 'firstName',
  },
  last_name: {
    type: String,
    alias: 'lastName',
  },
  username: String,
  email: String,
  avatar: String,
  gender: String,
  phone_number: {
    type: String,
    alias: 'phoneNumber',
  },
  social_insurance_number: {
    type: String,
    alias: 'socialInsuranceNumber',
  },
  date_of_birth: {
    type: Date,
    alias: 'dateOfBirth',
  },
  employment: employmentSchema,
  address: addressSchema,
  credit_card: {
    type: ccSchema,
    alias: 'creditCard',
  },
  subscription: subscriptionSchema,
});

export const UserModel = mongoose.model('user', userSchema);

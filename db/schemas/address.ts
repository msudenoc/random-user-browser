import { mongoose } from '@typegoose/typegoose';
import { Schema } from 'mongoose';
import { Address } from '../../models/address';

const AddressSchema = new Schema<any, Address>({
  id: {
    type: Number,
  },
  _id: {
    type: String,
    alias: 'uid',
  },
  city: {
    type: String,
  },
  street_name: {
    type: String,
    alias: 'streetName',
  },
  street_address: {
    type: String,
    alias: 'streetAddress',
  },
  secondary_address: {
    type: String,
    alias: 'secondaryAddress',
  },
  building_number: {
    type: String,
    alias: 'buildingNumber',
  },
  mail_box: {
    type: String,
    alias: 'mailBox',
  },
  community: {
    type: String,
  },
  zip_code: {
    type: String,
    alias: 'zipCode',
  },
  zip: {
    type: String,
  },
  postcode: {
    type: String,
    alias: 'postCode',
  },
  time_zone: {
    type: String,
    alias: 'timeZone',
  },
  street_suffix: {
    type: String,
    alias: 'streetSuffix',
  },
  city_suffix: {
    type: String,
    alias: 'citySuffix',
  },
  city_prefix: {
    type: String,
    alias: 'cityPrefix',
  },
  state: {
    type: String,
  },
  state_abbr: {
    type: String,
    alias: 'stateAbbr',
  },
  country: {
    type: String,
  },
  country_code: {
    type: String,
    alias: 'countryCode',
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  full_address: {
    type: String,
    alias: 'fullAddress',
  },
});

export const AddressModel = mongoose.model<Address>('Address', AddressSchema, 'addresses');

import { getMongoManager } from 'typeorm';
import { AddressEntity } from '../entities/address.entity';

export const getAddressList = () => {
  const manager = getMongoManager();
  return manager.find(AddressEntity, {});
};

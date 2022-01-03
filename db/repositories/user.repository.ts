import { getMongoManager } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export const getUserListByAddress = (country: string, city: string): Promise<UserEntity[]> => {
  const manager = getMongoManager();
  return manager.find(UserEntity, {
    where: {
      'address.country': { $eq: country },
      'address.city': { $eq: city },
    },
  });
};

import { FieldResolver, Query, Resolver, ResolverInterface, Root } from 'type-graphql';
import { PhysicalAddress } from '../models/address';
import { User } from '../models/user';
import { getAddressList } from '../db/repositories/address.repository';
import { getUserListByAddress } from '../db/repositories/user.repository';

@Resolver(() => PhysicalAddress)
export class AddressResolver implements ResolverInterface<PhysicalAddress> {
  @Query(() => [PhysicalAddress])
  async getAddressList(): Promise<PhysicalAddress[]> {
    const x = await getAddressList();
    return <PhysicalAddress[]>x;
  }

  @FieldResolver()
  async users(@Root() address: PhysicalAddress): Promise<User[]> {
    const x = await getUserListByAddress(address.country, address.city);
    return <User[]>x;
  }
}

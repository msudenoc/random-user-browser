import { Query, Resolver } from 'type-graphql';
import { Address } from '../models/address';
import { AddressModel } from '../db/schemas/address';

@Resolver()
export class AddressResolver {
  @Query(() => [Address])
  async getAddressList(): Promise<Address[]> {
    const res = await AddressModel.find({}).then();

    return res;
  }
}

import { Query, Resolver } from 'type-graphql';
import { User } from '../models/user';
import { UserModel } from '../db/schemas/user';

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async getUserList(): Promise<User[]> {
    const res = await UserModel.find({}).then();

    return res;
  }

  @Query(() => [User])
  async get(): Promise<User[]> {
    const res = await UserModel.find({}).then();

    return res;
  }
}

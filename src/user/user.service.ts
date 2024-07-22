import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { createUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModule: Model<User>) {}

  async create(createUserDto: createUserDto): Promise<User> {
    try {
      const createUser = new this.userModule(createUserDto);

      return await createUser.save();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const findUser = await this.userModule.findById(id);

      return findUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const findAllUsers = this.userModule.find().exec();

      return findAllUsers;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

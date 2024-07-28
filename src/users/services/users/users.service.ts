import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParam } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  findUsers() {
    return this.userRepository.find();
  }

  createUser(userDetails: CreateUserParam) {
    const newUser = this.userRepository.create({
      ...userDetails,
    });

    return this.userRepository.save(newUser);
  }
}

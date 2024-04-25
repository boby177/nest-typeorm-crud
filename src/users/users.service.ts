import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Get All Users
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  // Get One User
  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  // Create new User
  async createUser(user: User): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  // Update User
  async updateUser(id: number, user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return await this.usersRepository.findOne({ where: { id } });
  }

  // Delete User
  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
} 

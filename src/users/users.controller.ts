import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // Get all users
  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  // Get one user
  @Get(':id')
  async findOneUser(id: number): Promise<User> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  }

  // Create a new user
  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.userService.createUser(user);
  }

  // Update a user
  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.updateUser(id, user);
  }

  // Delete a user
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new Error('User not found');
    } else {
      return this.userService.deleteUser(user.id);
    }
  }
}

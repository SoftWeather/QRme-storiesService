import { Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerCreator } from '../../core/comm-utils/logging/logger-creator';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly _usersRepository: Repository<User>,
  ) {}

  private readonly _logger = new Logger(UsersService.name);

  async getActualCount(): Promise<number> {
    const query = `
    SELECT 
        COUNT(id) as count
    FROM 
        users
    WHERE
        users."isActive" = true AND users."isArchived" = false
    `;

    try {
      const queryResult: [{ count: number }] =
        await this._usersRepository.query(query);

      const count: number = queryResult[0].count;

      return count;
    } catch (error) {
      LoggerCreator.error(UsersService.name, this.getActualCount.name, error);

      return undefined;
    }
  }

  async getOneActualUsersIdByPagination(page = 0): Promise<string> {
    try {
      const UsersIds: User[] = await this._usersRepository.find({
        select: {
          id: true,
          isActive: true,
          isArchived: false,
        },
        skip: page,
        take: 1,
      });

      return UsersIds[0].id;
    } catch (error) {
      LoggerCreator.error(
        UsersService.name,
        this.getOneActualUsersIdByPagination.name,
        error,
      );

      return undefined;
    }
  }

  async findOneActualUserById(id: string): Promise<User> {
    try {
      const user: User = await this._usersRepository.findOneBy({
        isActive: true,
        isArchived: false,
        id,
      });

      return user;
    } catch (error) {
      LoggerCreator.error(
        UsersService.name,
        this.findOneActualUserById.name,
        error,
      );

      return undefined;
    }
  }
}

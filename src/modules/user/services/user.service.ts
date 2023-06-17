import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';


@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {

  }

  async createUser(createUserDto: CreateUserDto) {
    // 创建用户逻辑
    return this.prisma.user.create({ data: createUserDto });
  }
}

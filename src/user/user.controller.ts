import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() res: Response, @Body() createUserDto: createUserDto) {
    try {
      const createUser = await this.userService.create(createUserDto);

      return res.status(HttpStatus.CREATED).json({ data: createUser });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }

  @Get(':id')
  async findById(@Res() res: Response, @Param('id') id: string) {
    try {
      const findUser = await this.userService.findById(id);

      return res.status(HttpStatus.OK).json(findUser);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const findAllUsers = await this.userService.findAll();

      return res.status(HttpStatus.OK).json(findAllUsers);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  }
}

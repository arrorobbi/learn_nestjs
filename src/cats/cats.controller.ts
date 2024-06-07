import {
  Controller,
  Get,
  Post,
  Res,
  HttpStatus,
  Req,
  Next,
  Body,
} from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { CatsService } from './cats.service';
import { Cat, CreateCatDTO } from '../validators/cat.validator';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}
  @Get()
  async Index(@Res() res: Response, @Next() next: NextFunction) {
    try {
      const result: Cat[] = await this.catService.index();
      res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'Request Success',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  @Post()
  async Create(
    @Body() createCatDTO: CreateCatDTO,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    try {
      const data = createCatDTO;
      const result: Cat = await this.catService.create(data);
      res.status(HttpStatus.CREATED).json({
        status: HttpStatus.CREATED,
        message: 'Request Success',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

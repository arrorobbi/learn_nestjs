import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cat } from '../models/cat';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private catModel: typeof Cat,
  ) {}

  async index(): Promise<Cat[]> {
    return this.catModel.findAll();
  }

  async create(data: {}): Promise<Cat> {
    return this.catModel.create(data);
  }
}

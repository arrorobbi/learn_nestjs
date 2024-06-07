import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './sequelize.config';
import { Cat } from './models/cat';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig), //use sequelize config
    SequelizeModule.forFeature([Cat]), //use sequelize model
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}

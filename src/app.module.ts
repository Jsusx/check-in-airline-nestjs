import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './controllers/flight/flight.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import ConnectionConfig from 'ormconfig'


@Module({
    imports: [FlightModule, TypeOrmModule.forRoot(ConnectionConfig as TypeOrmModuleOptions)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}

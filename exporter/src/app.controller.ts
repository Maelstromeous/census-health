import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {WorldPopulationInterface} from "./interfaces/PopulationInterface";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/scrape')
  scrape(): WorldPopulationInterface {
    const populations: WorldPopulationInterface = this.appService.getMedKitPops();

    console.log(populations)

    return populations;
  }
}

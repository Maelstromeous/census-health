import { Injectable } from '@nestjs/common';
import {WorldPopulationInterface} from "./interfaces/PopulationInterface";

@Injectable()
export class AppService {
  getMedKitPops(): WorldPopulationInterface {
    return {
      1: {
        vs: 1,
        nc: 2,
        tr: 3,
        total: 6
      }
    }
  }
}

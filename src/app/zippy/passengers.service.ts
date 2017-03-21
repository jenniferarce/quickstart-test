import { Passengers } from './passengers';

export class PassengersService {
    
    getPassengers(): Passengers[] {
        return [new Passengers("Harry","Winward",30), new Passengers("John","Stark",27)];
    }
}

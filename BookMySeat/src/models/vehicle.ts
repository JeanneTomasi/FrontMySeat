import { TransitTime } from './transittime';
import { Line } from './line';
import { Seat } from './seat';

export class Vehicle {

    // tslint:disable-next-line:variable-name
    id_vehicle: number;
    immatriculation: string;
    capacity: number;
    passengers: number;
    placesLeft: number;
    fullRate: number;
    seat: Seat[];
    line: Line;
    // tslint:disable-next-line:variable-name
    transit_time: TransitTime;

    constructor() { }

}

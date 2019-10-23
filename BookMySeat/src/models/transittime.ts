import { Vehicle } from './vehicle';
import { Station } from './station';
export class TransitTime {

    // tslint:disable-next-line:variable-name
    id_transit_time: number;
    // tslint:disable-next-line:variable-name
    transit_time: string;
    vehicle: Vehicle[];
    station: Station;

    constructor() { }

}

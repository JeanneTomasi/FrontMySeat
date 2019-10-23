import { SeatReservation } from './seatreservation';
import { Vehicle } from './vehicle';
import { User } from './user';
export class Seat {

    // tslint:disable-next-line:variable-name
    id_seat: number;
    placement: string;
    reservable: boolean;
    isReserved: boolean;
    user: User;
    vehicle: Vehicle;
    // tslint:disable-next-line:variable-name
    seat_reservation: SeatReservation;

    constructor() { }
}


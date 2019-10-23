import { Seat } from './seat';
import { User } from './user';
export class SeatReservation {

    // tslint:disable-next-line:variable-name
    id_seat_reservation: number;
    // tslint:disable-next-line:variable-name
    starting_time: string;
    // tslint:disable-next-line:variable-name
    release_time: string;
    user: User;
    seat: Seat;

    constructor() { }

}

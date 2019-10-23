import { SeatReservation } from './seatreservation';
import { Seat } from './seat';
export class User {

    // tslint:disable-next-line:variable-name
    id_user: number;
    name: string;
    firstName: string;
    dateDeNaissance: Date;
    num: number;
    street: string;
    city: string;
    postalCode: number;
    country: string;
    email: string;
    handicap: Handicap;
    username: string;
    seat: Seat;
    // tslint:disable-next-line:variable-name
    seat_reservation: SeatReservation;
    constructor() { }
}

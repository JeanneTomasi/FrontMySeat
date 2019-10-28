import { Collectivity } from './collectivity';

export class TransportEnterprise {

    // tslint:disable-next-line:variable-name
    id_transportEntreprise: number;
    name: string;
    collectivity: Collectivity;

    constructor() {
        this.collectivity = new Collectivity();
    }
}

import { TransportEntrepriseService } from './../services/transportenterprise.service';
export class Collectivity {

    // tslint:disable-next-line:variable-name
    id_collectivity: number;
    name: string;
    // tslint:disable-next-line:variable-name
    operation_area: string;
    // tslint:disable-next-line:variable-name
    transport_entreprise: TransportEntrepriseService;

    constructor() { }
}

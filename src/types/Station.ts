import Contact from "./Contact";
import Customer from "./Customer";
import GpsCoordinates from "./GpsCoordinates";
import StationAddress from "./StationAddress";

export default class Station{
    id!: Number;
    tmsReference: String | undefined | null;
    name: String | undefined | null;
    address: StationAddress | undefined | null;
    gpsCoords: GpsCoordinates | undefined | null;
    customer: Customer | undefined | null;
    mainContact: Contact | undefined | null;
    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
    }
}
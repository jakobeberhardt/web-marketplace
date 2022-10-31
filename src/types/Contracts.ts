import Shipment from "./Shipment";

export default class Contract{
    id!: String;
    userId!: Number;
    //shipment: Shipment;

    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.userId) this.userId = initializer.userId;
        //if(initializer.shipment) this.shipment = new Shipment(initializer.shipment);
    }

    /* constructor(id: String, userId: Number){
        this.id = id;
        this.userId = userId;
    } */
}
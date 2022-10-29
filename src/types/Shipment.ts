import Visit from './Visit'
import Requirement from './Requirement'

export default class Shipment {
    id!: any;
    tmsReference: String | undefined | null;
    position!: Number;
    label: String | undefined | null;
    //pickup!: Visit;
    pickupReference: String | undefined | null;
    //delivery!: Visit;
    deliveryReference: String | undefined | null;
    totalItemCount: Number | undefined | null;
    totalWeight: Number | undefined | null;
    totalVolume: Number | undefined | null;
    totalLoadMeters: Number | undefined | null;
    internalInfo: String | undefined | null;
    //requirements!: Requirement;

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.tmsReference) this.tmsReference = initializer.tmsReference;
        if(initializer.position) this.position = initializer.position;
        if(initializer.label) this.label = initializer.label;
        //if(initializer.pickup) this.pickup = new Visit(initializer.pickup);
        if(initializer.pickupReference) this.pickupReference = initializer.pickupReference;
        //if(initializer.delivery) this.delivery = new Visit(initializer.delivery);
        if(initializer.deliveryReference) this.deliveryReference = initializer.deliveryReference;
        if(initializer.totalItemCount) this.totalItemCount = initializer.totalItemCount;
        if(initializer.totalWeight) this.totalWeight = initializer.totalWeight;
        if(initializer.totalVolume) this.totalVolume = initializer.totalVolume;
        if(initializer.totalLoadMeters) this.totalLoadMeters = initializer.totalLoadMeters;
        if(initializer.internalInfo) this.internalInfo = initializer.internalInfo;
        //if(initializer.requirements) this.requirements = new Requirement(initializer.requirements);
    }
}
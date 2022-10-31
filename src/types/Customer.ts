import CustomerAddress from "./CustomerAddress";

export default class StationAddress{
    id!: Number;
    name: String | undefined | null;
    tmsReference: String | undefined | null;
    vatId: String | undefined | null;
    address: CustomerAddress | undefined | null;
    
    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.name) this.name = initializer.name;
        if(initializer.tmsReference) this.tmsReference = initializer.tmsReference;
        if(initializer.vatId) this.vatId = initializer.vatId;
        if(initializer.address) this.address = new CustomerAddress(initializer.address);
    }
}
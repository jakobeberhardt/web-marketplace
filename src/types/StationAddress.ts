export default class StationAddress{
    name: String | undefined | null;
    building: String | undefined | null;
    gate: String | undefined | null;
    street: String | undefined | null;
    zipcode: String | undefined | null;
    city: String | undefined | null;
    country: String | undefined | null;

    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.name) this.name = initializer.name;
        if(initializer.building) this.building = initializer.building;
        if(initializer.gate) this.gate = initializer.gate;
        if(initializer.street) this.street = initializer.street;
        if(initializer.zipcode) this.zipcode = initializer.zipcode;
        if(initializer.city) this.city = initializer.city;
        if(initializer.country) this.country = initializer.country;
    }
}
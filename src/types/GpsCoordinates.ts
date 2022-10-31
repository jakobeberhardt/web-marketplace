export default class StationAddress{
    latitude!: Number;
    longitude!: Number;
    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.latitude) this.latitude = initializer.latitude;
        if(initializer.longitude) this.longitude = initializer.longitude
    }
}
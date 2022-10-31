export default class AllowedTimeWindow{
    startTime!: Date;
    endTime!: Date;
    
    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.startTime) this.startTime = new Date(initializer.endTime);
        if(initializer.endTime) this.endTime = new Date(initializer.endTime);
    }
}
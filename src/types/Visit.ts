import Avis from "./Avis";
import Station from "./Station";
import AllowedTimeWindow from "./AllowedTimeWindow";

export default class Visit {
    station!: Station;
    contact!: String;
    plannedServiceDuration: Number | undefined | null;
    avis!: Array<Avis>;
    allowedTimeWindows!: Array<AllowedTimeWindow>;
    timeWindowBookingUrl!: String;

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.station) this.station = initializer.station;
        if(initializer.contact) this.contact = initializer.contact;
        if(initializer.plannedServiceDuration) this.plannedServiceDuration = initializer.plannedServiceDuration;
        if(initializer.avis) this.avis = initializer.avis;
        if(initializer.allowedTimeWindows) this.allowedTimeWindows = initializer.allowedTimeWindows;
        if(initializer.timeWindowBookingUrl) this.timeWindowBookingUrl = initializer.timeWindowBookingUrl;
    }
}
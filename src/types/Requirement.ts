import BooleanRequirement from "./BooleanRequirement";
import EnumRequirement from "./EnumRequirement";
import IntegerRequirement from "./IntegerRequirement";

export default class Requirement {
    boxTrailer: BooleanRequirement | undefined | null;
    cleanedVehicle: BooleanRequirement | undefined  | null;
    craneLoadable: BooleanRequirement | undefined | null;
    emptyVehicle: BooleanRequirement | undefined | null;
    fireExtinguisher: BooleanRequirement | undefined | null;
    foodstuffs: BooleanRequirement | undefined | null;
    healthCert: BooleanRequirement | undefined | null;
    keepDry: BooleanRequirement | undefined | null;
    loadHeight: IntegerRequirement | undefined | null;
    loadLength: IntegerRequirement | undefined | null;
    loadWidth: IntegerRequirement | undefined | null;
    mobileForklift: BooleanRequirement | undefined | null;
    palletSwap: BooleanRequirement | undefined | null;
    ppeFfp2Mask: BooleanRequirement | undefined | null;
    ppeHelmet: BooleanRequirement | undefined | null;
    ppeShoes: BooleanRequirement | undefined | null;
    ppeVest: BooleanRequirement | undefined | null;
    sideLoadable: BooleanRequirement | undefined | null;
    tailLift: BooleanRequirement | undefined | null;
    trackingLevel: EnumRequirement | undefined | null;
    wasteSign: BooleanRequirement | undefined | null;
    whitelabelVehicle: BooleanRequirement | undefined | null;

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.boxTrailer) this.boxTrailer = new BooleanRequirement(initializer.boxTrailer);
        if(initializer.cleanedVehicle) this.cleanedVehicle = new BooleanRequirement(initializer.cleanedVehicle);
        if(initializer.craneLoadable) this.craneLoadable = new BooleanRequirement(initializer.craneLoadable);
        if(initializer.emptyVehicle) this.emptyVehicle = new BooleanRequirement(initializer.emptyVehicle);
        if(initializer.fireExtinguisher) this.fireExtinguisher = new BooleanRequirement(initializer.fireExtinguisher);
        if(initializer.foodstuffs) this.foodstuffs = new BooleanRequirement(initializer.foodstuffs);
        if(initializer.healthCert) this.healthCert = new BooleanRequirement(initializer.healthCert);
        if(initializer.keepDry) this.keepDry = new BooleanRequirement(initializer.keepDry);
        if(initializer.loadHeight) this.loadHeight = new IntegerRequirement(initializer.loadHeight);
        if(initializer.loadLength) this.loadLength = new IntegerRequirement(initializer.boxTrailer);
        if(initializer.loadWidth) this.loadWidth = new IntegerRequirement(initializer.loadWidth);
        if(initializer.mobileForklift) this.mobileForklift = new BooleanRequirement(initializer.mobileForklift);
        if(initializer.palletSwap) this.palletSwap = new BooleanRequirement(initializer.palletSwap);
        if(initializer.ppeFfp2Mask) this.ppeFfp2Mask = new BooleanRequirement(initializer.ppeFfp2Mask);
        if(initializer.ppeHelmet) this.ppeHelmet = new BooleanRequirement(initializer.ppeHelmet);
        if(initializer.ppeShoes) this.ppeShoes = new BooleanRequirement(initializer.ppeShoes);
        if(initializer.ppeVest) this.ppeVest = new BooleanRequirement(initializer.boxTrailer);
        if(initializer.sideLoadable) this.sideLoadable = new BooleanRequirement(initializer.sideLoadable);
        if(initializer.tailLift) this.tailLift = new BooleanRequirement(initializer.tailLift);
        if(initializer.trackingLevel) this.trackingLevel = new EnumRequirement(initializer.trackingLevel);
        if(initializer.wasteSign) this.wasteSign = new BooleanRequirement(initializer.wasteSign);
        if(initializer.whitelabelVehicle) this.whitelabelVehicle = new BooleanRequirement(initializer.whitelabelVehicle);
    }
}
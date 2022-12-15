enum TriggerType {
  FIXED_DATETIME = "FIXED_DATETIME",
  ARRIVAL_OFFSET = "ARRIVAL_OFFSET",
  GEOFENCE = "GEOFENCE",
}

enum AvisType {
  PHONE = "PHONE",
  MAIL = "MAIL",
  SMS = "SMS",
}

export default class Avis {
  triggerType!: String;
  avisType!: String;
  triggerOffset!: String;
  recipient!: String;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.triggerType) this.triggerType = initializer.triggerType;
    if (initializer.avisType) this.avisType = initializer.avisType;
    if (initializer.triggerOffset)
      this.triggerOffset = initializer.triggerOffset;
    if (initializer.recipient) this.recipient = initializer.recipient;
  }
}

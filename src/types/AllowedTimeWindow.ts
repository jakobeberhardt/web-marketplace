export default class AllowedTimeWindow {
  startTime!: String;
  endTime!: String;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.startTime) this.startTime = initializer.startTime;
    if (initializer.endTime) this.endTime = initializer.endTime;
  }
}

export default class Bid {
  id!: String;
  userId!: String;
  value!: Number;
  currency!: String;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.userId) this.userId = initializer.userId;
    if (initializer.shipment) this.value = initializer.value;
    if (initializer.currency) this.currency = initializer.currency;
  }
}

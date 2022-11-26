import Shipment from "./Shipment";
import Bid from "./Bid";

export default class Bidding {
  id!: String;
  userId!: Number;
  shipment!: Shipment;
  bids!: Array<Bid>;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.userId) this.userId = initializer.userId;
    if (initializer.shipment)
      this.shipment = new Shipment(initializer.shipment);
    if (initializer.bids) this.bids = new Array<Bid>(initializer.bids);
  }
}

import { Scopes } from "./Scopes";

export default class BooleanRequirement {
  scopes!: String;
  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.scopes) this.scopes = initializer.scopes;
  }
}

import { Scopes } from "./Scopes";

export default class IntegerRequirement {
  scopes!: String;
  params: String | undefined | null;
  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.scopes) this.scopes = initializer.scopes;
    if (initializer.params) this.params = initializer.params;
  }
}

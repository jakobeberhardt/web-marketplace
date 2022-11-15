export default class User {
  id!: String;
  private _username!: string;
  private _password!: string;

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.username) this._username = initializer.username;
    if (initializer.password) this._password = initializer.password;
  }
}

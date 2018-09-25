export class User {
  firstInitial: string = this.username.charAt(0).toUpperCase();

  constructor(public username: string) { }
}

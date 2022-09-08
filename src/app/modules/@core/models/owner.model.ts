export class Owner {

  public firstName: string;

  public lastName: string;

  public constructor(data: Partial<Owner> = {}) {
    Object.assign(this, data);
  }
}

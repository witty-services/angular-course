export class Owner {

  public id: number;

  public firstName: string;

  public lastName: string;

  public constructor(data: Partial<Owner> = {}) {
    Object.assign(this, data);
  }
}

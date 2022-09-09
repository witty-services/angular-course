export class Animal {

  public id: number;

  public name: string;

  public age: number;

  public birthDate: Date;

  public ownerId: number;

  public constructor(data: Partial<Animal> = {}) {
    Object.assign(this, data);
  }
}

export class Animal {

  public name: string;

  public age: number;

  public birthDate: Date;

  public constructor(data: Partial<Animal> = {}) {
    Object.assign(this, data);
  }
}

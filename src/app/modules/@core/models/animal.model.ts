import { Owner } from './owner.model';

export class Animal {

  public name: string;

  public age: number;

  public birthDate: Date;

  public owner: Owner;

  public constructor(data: Partial<Animal> = {}) {
    Object.assign(this, data);
  }
}

import { Component } from '@angular/core';
import { Animal } from '../modules/@core/models/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: 'animal-list.component.html'
})
export class AnimalListComponent {

  public readonly animals: Animal[] = [
    new Animal({name: 'Samouraï', age: 8, birthDate: new Date()}),
    new Animal({name: 'Salsa', age: 1, birthDate: new Date()}),
    new Animal({name: 'Crevette', age: 5, birthDate: new Date(2017, 11, 8)}),
  ]
}

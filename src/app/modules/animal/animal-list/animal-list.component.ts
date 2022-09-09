import { Component } from '@angular/core';
import { Animal } from '../../@core/models/animal.model';
import { first, Observable } from 'rxjs';
import { AnimalService } from '../../@core/services/animal.service';

@Component({
  templateUrl: 'animal-list.component.html'
})
export class AnimalListComponent {

  public readonly animals$: Observable<Animal[]>;

  public constructor(private readonly animalService: AnimalService) {
    this.animals$ = animalService.findAll().pipe(
      first()
    );
  }
}

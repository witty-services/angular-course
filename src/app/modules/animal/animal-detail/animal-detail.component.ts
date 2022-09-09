import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { first, Observable, switchMap } from 'rxjs';
import { Animal } from '../../@core/models/animal.model';
import { AnimalService } from '../../@core/services/animal.service';
import { OwnerService } from '../../@core/services/owner.service';
import { Owner } from '../../@core/models/owner.model';

@Component({
  selector: 'app-animal-detail',
  templateUrl: 'animal-detail.component.html'
})
export class AnimalDetailComponent {

  public readonly animal$: Observable<Animal>;

  public readonly owner$: Observable<Owner>;

  public constructor(private readonly route: ActivatedRoute,
                     private readonly animalService: AnimalService,
                     private readonly ownerService: OwnerService) {
    this.animal$ = route.paramMap.pipe(
      switchMap((params: ParamMap) => animalService.findById(+params.get('id'))),
      first()
    );

    this.owner$ = this.animal$.pipe(
      switchMap((animal: Animal) => ownerService.findById(animal.ownerId)),
      first()
    );
  }
}

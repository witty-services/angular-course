import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, first, map, Observable, shareReplay, switchMap, take } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnimalService } from '../../@core/services/animal.service';
import { Animal } from '../../@core/models/animal.model';

@Component({
  templateUrl: 'animal-form.component.html',
  styleUrls: ['animal-form.component.scss']
})
export class AnimalFormComponent {

  public readonly form: FormGroup;

  public readonly animal$: Observable<Animal>;

  public submitted: boolean = false;

  public constructor(private readonly animalService: AnimalService,
                     private readonly router: Router,
                     fb: FormBuilder,
                     route: ActivatedRoute) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      age: [0, [Validators.required, Validators.min(0)]],
      birthDate: ['', [Validators.required]]
    });

    this.animal$ = route.paramMap.pipe(
      switchMap((params: ParamMap) => animalService.findById(+params.get('id'))),
      shareReplay({
        refCount: true,
        bufferSize: 1
      })
    );

    this.animal$.pipe(
      first()
    ).subscribe((animal: Animal) => this.form.patchValue(animal));
  }

  public submit(): void {
    this.submitted = true;

    this.animal$.pipe(
      filter(() => this.form.valid),
      map((animal: Animal) => new Animal({...animal, ...this.form.value})),
      switchMap((animal: Animal) => this.animalService.update(animal)),
      take(1)
    ).subscribe(() => this.router.navigate(['/', 'animal', 'list']));
  }
}

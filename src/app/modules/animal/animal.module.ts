import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal.component';
import { RouterModule } from '@angular/router';
import { animalRoutes } from './animal.routing';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(animalRoutes)
  ],
  declarations: [
    AnimalComponent,
    AnimalListComponent
  ],
})
export class AnimalModule {
}

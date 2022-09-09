import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from './services/animal.service';
import { OwnerService } from './services/owner.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AnimalService,
    OwnerService
  ]
})
export class CoreModule {
}

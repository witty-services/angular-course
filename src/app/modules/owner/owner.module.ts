import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerComponent } from './owner.component';
import { RouterModule } from '@angular/router';
import { ownerRoutes } from './owner.routing';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ownerRoutes)
  ],
  declarations: [
    OwnerComponent,
    OwnerListComponent
  ],
})
export class OwnerModule {
}

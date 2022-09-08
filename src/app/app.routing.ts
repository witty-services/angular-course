import { Routes } from '@angular/router';
import { AnimalModule } from './modules/animal/animal.module';
import { OwnerModule } from './modules/owner/owner.module';

export const routes: Routes = [
  {
    path: 'animal',
    loadChildren: () => import('./modules/animal/animal.module').then((m: { AnimalModule: AnimalModule }) => m.AnimalModule)
  },
  {
    path: 'owner',
    loadChildren: () => import('./modules/owner/owner.module').then((m: { OwnerModule: OwnerModule }) => m.OwnerModule)
  },
  {
    path: '',
    redirectTo: 'animal',
    pathMatch: 'full'
  }
]

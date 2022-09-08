import { Routes } from '@angular/router';
import { AnimalComponent } from './animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

export const animalRoutes: Routes = [
  {
    path: '',
    component: AnimalComponent,
    children: [
      {
        path: 'list',
        component: AnimalListComponent
      },
      {
        path: '',
        redirectTo: '/animal/list',
        pathMatch: 'full'
      }
    ],
  },
]

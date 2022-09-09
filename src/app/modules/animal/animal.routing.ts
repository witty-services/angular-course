import { Routes } from '@angular/router';
import { AnimalComponent } from './animal.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

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
        path: 'detail/:id',
        component: AnimalDetailComponent
      },
      {
        path: '',
        redirectTo: '/animal/list',
        pathMatch: 'full'
      }
    ],
  },
]

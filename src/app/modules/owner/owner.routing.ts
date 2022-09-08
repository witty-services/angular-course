import { Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';

export const ownerRoutes: Routes = [
  {
    path: '',
    component: OwnerComponent,
    children: [
      {
        path: 'list',
        component: OwnerListComponent
      },
      {
        path: '',
        redirectTo: '/owner/list',
        pathMatch: 'full'
      }
    ],
  },
]

import { Component } from '@angular/core';
import { Owner } from '../../@core/models/owner.model';

@Component({
  templateUrl: 'owner-list.component.html'
})
export class OwnerListComponent {

  public readonly owners: Owner[] = [
    new Owner({firstName: 'Thomas', lastName: 'Nisole'}),
    new Owner({firstName: 'Oscar', lastName: 'Guérin'}),
  ]
}

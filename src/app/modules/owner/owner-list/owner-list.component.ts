import { Component } from '@angular/core';
import { Owner } from '../../@core/models/owner.model';
import { first, Observable } from 'rxjs';
import { OwnerService } from '../../@core/services/owner.service';

@Component({
  templateUrl: 'owner-list.component.html'
})
export class OwnerListComponent {

  public readonly owners$: Observable<Owner[]>;

  public constructor(private readonly ownerService: OwnerService) {
    this.owners$ = ownerService.findAll().pipe(
      first()
    );
  }
}

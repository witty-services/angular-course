import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Owner } from '../models/owner.model';

@Injectable()
export class OwnerService {

  private readonly url: string = environment.apiUrl + '/owners';

  public constructor(private readonly http: HttpClient) {
  }

  public findAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.url);
  }

  public findById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${ this.url }/${ id }`);
  }
}

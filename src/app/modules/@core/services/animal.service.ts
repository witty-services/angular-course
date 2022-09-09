import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AnimalService {

  private readonly url: string = environment.apiUrl + '/animals';

  public constructor(private readonly http: HttpClient) {
  }

  public findAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url);
  }

  public findById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${ this.url }/${ id }`);
  }
}

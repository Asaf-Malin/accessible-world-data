import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IObject } from '../models/object';

@Injectable({
  providedIn: 'root',
})
export class ObjectsService {
  public objects: IObject[] = [];

  constructor(private http: HttpClient) {}

  getObjects() {
    return this.http.get<IObject[]>(environment.apiEndPoint + 'getObjects');
  }

  createObject(data: {name: string, creator: string}){
    return this.http.post(environment.apiEndPoint + 'createObject', data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Lexeme } from '../models/lexeme';

@Injectable({
  providedIn: 'root',
})
export class LexemesService {
  public lexemes: Lexeme[] = [];

  constructor(private http: HttpClient) {}

  searchLexeme(search: string) {
    return this.http.get<Lexeme>(environment.apiEndPoint + 'getLexeme/' + search);
  }

  createObject(data: {name: string, creator: string}){
    return this.http.post(environment.apiEndPoint + 'createObject', data);
  }
}

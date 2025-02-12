import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Lexeme } from "../models/lexeme";

@Injectable({
  providedIn: "root",
})
export class LexemesService {
  public lexemes: Lexeme[] = [];

  constructor(private http: HttpClient) {}

  searchLexeme(searchTerm: string) {
    return this.http.get<Lexeme>(
      environment.apiEndPoint + "getLexeme/?searchTerm=" + searchTerm,
    );
  }

  getNextWord() {
    return this.http.get<Lexeme>(
      environment.apiEndPoint + "getNextWord",
    );
  }

  createLexemes(lexemes: Lexeme[]) {
    return this.http.post<Lexeme[]>(
      environment.apiEndPoint + "createLexemes", lexemes
    );
  }

  updateLexeme(lexeme: Lexeme) {
    return this.http.post<Lexeme[]>(
      environment.apiEndPoint + "updateLexeme", lexeme
    );
  }

}

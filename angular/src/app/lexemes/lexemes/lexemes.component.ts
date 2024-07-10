import { Component } from "@angular/core";
import { LexemesService } from "../shared/services/lexemes-service";
import { Lexeme } from "../shared/models/lexeme";

@Component({
  selector: "app-lexemes",
  templateUrl: "./lexemes.component.html",
  styleUrls: ["./lexemes.component.scss"],
})
export class LexemesComponent {
  public currentLexeme: Lexeme = this.getEmptyLexeme();
  public searchTerm: string = "";
  public afterSearch: boolean = false;
  public tableToUpload: string = "";
  public topLine: string[] = [];
  public secondLine: string[] = [];

  constructor(public lexemesService: LexemesService) {}

  getEmptyLexeme(){
    return {
      id: 0,
      lexemeWithVowels: '',
      lexemeWithoutVowels: '',
      partOfSpeech: '',
      gender: '',
      exampleSentence1: '',
      exampleSentence2: '',
      translation1He: '',
      translation1En: '',
      translation2He: '',
      translation2En: '',
      translation3He: '',
      translation3En: '',
      plural1: '',
      plural2: '',
      pluralBroken: '',
      pluralOfPlural: '',
      sourceForm: '',
      femaleForm: '',
      doubleForm: '',
      articleForm: '',
      source: '',
      creation: '',
    }
  }

  search() {
    this.lexemesService.searchLexeme(this.searchTerm).subscribe((data) => {
      this.currentLexeme = data;
      this.afterSearch = true;
    });
  }

  matchColumns(){
    this.tableToUpload;
    let contents = [];
    for(let line of this.tableToUpload.split('\n')){
      let lineContent = [];
      for(let cell of line.split('\t')){
        lineContent.push(cell);
      }
      contents.push(lineContent);
    }

    this.topLine = contents[0];
    this.secondLine = contents[1];
  }
}

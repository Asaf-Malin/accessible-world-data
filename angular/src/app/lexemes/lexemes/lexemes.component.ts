import { Component } from "@angular/core";
import { LexemesService } from "../shared/services/lexemes-service";
import { Lexeme } from "../shared/models/lexeme";
import { KeyValue } from "../shared/models/key-value";
import { possibleColumns } from "../shared/objects";

@Component({
  selector: "app-lexemes",
  templateUrl: "./lexemes.component.html",
  styleUrls: ["./lexemes.component.scss"],
})
export class LexemesComponent {
  public currentLexeme: any = this.getEmptyLexeme();
  public searchTerm: string = "";
  public afterSearch: boolean = false;
  public tableStr: string = "";
  public tableData: string[][] = [];
  public topLine: string[] = [];
  public secondLine: string[] = [];
  public matchedColumns: string[] = [];
  public possibleColumns: KeyValue[] = possibleColumns;

  constructor(public lexemesService: LexemesService) {}

  getEmptyLexeme() {
    return {
      id: 0,
      lexemeWithVowels: "",
      lexemeWithoutVowels: "",
      partOfSpeech: "",
      gender: "",
      exampleSentence1: "",
      exampleSentence2: "",
      translation1He: "",
      translation1En: "",
      translation2He: "",
      translation2En: "",
      translation3He: "",
      translation3En: "",
      plural1: "",
      plural2: "",
      pluralBroken: "",
      pluralOfPlural: "",
      sourceForm: "",
      femaleForm: "",
      femalePluralForm: "",
      doubleForm: "",
      root: "",
      source: "",
      creation: "",
    };
  }

  search() {
    this.lexemesService.searchLexeme(this.searchTerm).subscribe((data) => {
      this.currentLexeme = data;
      this.afterSearch = true;
    });
  }

  matchColumns() {
    this.matchedColumns = [];
    this.tableData = [];
    for (let line of this.tableStr.split("\n")) {
      let lineContent = [];
      for (let cell of line.split("\t")) {
        lineContent.push(cell);
      }
      this.tableData.push(lineContent);
    }

    this.topLine = this.tableData[0];
    this.secondLine = this.tableData[1];
  }

  updateLexeme(){
    this.lexemesService.updateLexeme(this.currentLexeme).subscribe((data) => {
      alert('success');
    });
  }

  getNextWord(){
    this.lexemesService.getNextWord().subscribe((data) => {
      this.currentLexeme = data;
      this.afterSearch = true;
    });
  }

  upload() {
    if(!this.tableData.length){
      alert('nothing to upload');
    }

    if(!this.matchedColumns.length){
      alert('matching columns not set');
    }

    let newLexemes: Lexeme[] = [];
    let lineIndex = 0;
    for(let line of this.tableData){
      lineIndex++;
      //skip first line
      if(lineIndex == 1){
        continue;
      }

      let columnIndex = 0;
      let newLexeme: any = this.getEmptyLexeme();

      for(let column of line){
        if(this.matchedColumns[columnIndex]){
          newLexeme[this.matchedColumns[columnIndex]] = column;
        }
        columnIndex++;
      }
      newLexemes.push(newLexeme);
    }

    this.lexemesService.createLexemes(newLexemes).subscribe((data) => {
      alert('success');
    });
  }
}

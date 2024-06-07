import { Component } from '@angular/core';
import { ObjectsService } from '../shared/services/objects-service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent {
  public currentObjects: any[] = [];
  public name: string = '';
  public creator: string = '';

  constructor(
    public objectsService: ObjectsService,
  ) {}

  getObjects(){
    this.objectsService.getObjects().subscribe((data)=>{
      this.currentObjects = data;
    });
  }

  printJSON(object: any){
    return JSON.stringify(object);
  }

  addObject(){
    this.objectsService.createObject({name: this.name, creator: this.creator}).subscribe((data)=>{
      debugger
    });
  }
}

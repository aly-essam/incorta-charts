import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ColumnFunctions, ColumnModel } from '../models/column.model';
@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  @Input() columnList: ColumnModel[];
  dimensions: ColumnModel[] = new Array<ColumnModel>();
  measures: ColumnModel[] = new Array<ColumnModel>();

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<ColumnModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  measurePredicate(item: CdkDrag<ColumnModel>, measures: CdkDropList) {
    return item.data.function == ColumnFunctions.MEASURE && measures.data.length<1;
  }

  dimensionPredicate(item: CdkDrag<ColumnModel>, dimension: CdkDropList) {
    return item.data.function == ColumnFunctions.DIMESNION && dimension.data.length<1;
  }

  clearDimension(dimension: ColumnModel){
    this.columnList.push(dimension);
    this.dimensions = [];
  }

  clearMeasure(measure: ColumnModel){
    this.columnList.push(measure);
    this.measures = [];
  }
}

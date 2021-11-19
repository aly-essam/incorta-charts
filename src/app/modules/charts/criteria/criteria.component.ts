import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { ColumnFunctions, ColumnModel } from '../models/column.model';
import { CriteriaModel } from '../models/criteria.model';
@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
  @Input() columnList: ColumnModel[];
  @Output()
  private criteriaCompleteEvent = new EventEmitter<CriteriaModel>();

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
      this.checkCriteriaCompletionAndEmitEvent();
    }
  }

  measurePredicate(item: CdkDrag<ColumnModel>) {
    return item.data.function == ColumnFunctions.MEASURE;
  }

  dimensionPredicate(item: CdkDrag<ColumnModel>, dimension: CdkDropList) {
    return item.data.function == ColumnFunctions.DIMESNION && dimension.data.length < 1;
  }

  clearDimension(dimension: ColumnModel) {
    this.columnList.push(dimension);
    this.dimensions = [];
  }

  clearMeasure(measure: ColumnModel) {
    this.columnList.push(measure);
    this.measures.splice(this.measures.indexOf(measure), 1);
    this.checkCriteriaCompletionAndEmitEvent();
  }

  checkCriteriaCompletionAndEmitEvent() {
    if (this.dimensions.length == 1 && this.measures.length > 0) {
      this.criteriaCompleteEvent.emit(new CriteriaModel(this.dimensions[0], this.measures));
    }
  }
}

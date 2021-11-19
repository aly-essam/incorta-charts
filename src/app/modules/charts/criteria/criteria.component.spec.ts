import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CriteriaComponent } from './criteria.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnFunctions } from '../models/column.model';

describe('CriteriaComponent', () => {
  let component: CriteriaComponent;
  let fixture: ComponentFixture<CriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragDropModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
      declarations: [CriteriaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept measures in measures list', () => {
    let item: any = {
      data: {
        name: "measure",
        function: ColumnFunctions.MEASURE
      }
    };
    expect(component.measurePredicate(item)).toBeTruthy();
  });

  it('should reject dimension in measures list', () => {
    let item: any = {
      data: {
        name: "dimension",
        function: ColumnFunctions.DIMESNION
      }
    };
    expect(component.measurePredicate(item)).toBeFalsy();
  });

  it('should accept dimension in dimension', () => {
    let item: any = {
      data: {
        name: "dimension",
        function: ColumnFunctions.DIMESNION
      }
    };
    let dimesnion: any = { data: [] }
    expect(component.dimensionPredicate(item, dimesnion)).toBeTruthy();
  });

  it('should accept only 1 dimension', () => {
    let item: any = {
      data: {
        name: "dimension",
        function: ColumnFunctions.DIMESNION
      }
    };
    let dimesnion: any = { data: [item] }
    expect(component.dimensionPredicate(item, dimesnion)).toBeFalsy();
  });

  it('should clear measure and add it back to columnList', () => {
    let measure = {
      name: "measure",
      function: ColumnFunctions.MEASURE
    };
    component.measures = [measure];
    component.columnList = [];
    component.clearMeasure(measure);
    expect(component.measures.length).toEqual(0) && expect(component.columnList.length).toEqual(1) ;
  });

  it('should clear dimension and add it back to columnList', () => {
    let dimension = {
      name: "dimension",
      function: ColumnFunctions.DIMESNION
    };
    component.dimensions = [dimension];
    component.columnList = [];
    component.clearDimension(dimension);
    expect(component.dimensions.length).toEqual(0) && expect(component.columnList.length).toEqual(1) ;
  });
});


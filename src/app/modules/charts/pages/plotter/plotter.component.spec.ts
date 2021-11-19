import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CriteriaComponent } from '../../criteria/criteria.component';
import { LineChartComponent } from '../../line-chart/line-chart.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlotterComponent } from './plotter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartsModule as ng2Charts } from 'ng2-charts';
import { PlotterService } from './plotter.service';
import { ChartsService } from '../../services/charts.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from 'src/app/common/services/http-error-handler.service';
import { BASE_PATH } from 'src/app/common/variables';
import { environment } from 'src/environments/environment';
import { UtilsService } from 'src/app/common/services/utils.service';

describe('PlotterComponent', () => {
  let component: PlotterComponent;
  let fixture: ComponentFixture<PlotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragDropModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, ng2Charts, HttpClientModule],
      declarations: [PlotterComponent, CriteriaComponent, LineChartComponent],
      providers: [PlotterService, ChartsService, HttpErrorHandler, { provide: BASE_PATH, useValue: environment.chartsBaseUrl }, UtilsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render appCriteria component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-criteria')).toBeDefined();
  });

  it('should render Line chart', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-line-chart')).toBeDefined();
  });

});

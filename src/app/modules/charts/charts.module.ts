import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { PlotterComponent } from './pages/plotter/plotter.component';
import { ChartsService } from './services/charts.service';
import { HttpClientModule } from '@angular/common/http';
import { BASE_PATH } from 'src/app/common/variables';
import { environment } from 'src/environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartsModule as ng2Charts } from 'ng2-charts';
import { PlotterService } from './pages/plotter/plotter.service';

@NgModule({
  declarations: [LineChartComponent, CriteriaComponent, PlotterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ng2Charts
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.chartsBaseUrl },
    ChartsService, PlotterService],
})
export class ChartsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsListComponent } from './columns-list/columns-list.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { PlotterComponent } from './pages/plotter/plotter.component';
import { ChartsService } from './services/charts.service';
import { HttpClientModule } from '@angular/common/http';
import { BASE_PATH } from 'src/app/common/variables';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ColumnsListComponent, LineChartComponent, CriteriaComponent, PlotterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{ provide: BASE_PATH, useValue: environment.chartsBaseUrl },
    ChartsService],
})
export class ChartsModule { }

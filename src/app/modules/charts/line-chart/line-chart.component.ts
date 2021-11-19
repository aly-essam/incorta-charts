import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';
import { LineChartModel } from '../models/line-chart.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  lineChartMeasureData: ChartDataSets[] = new Array<ChartDataSets>();
  lineChartDimensionValue: string[];
  dimensionName:string;
  renderChart: boolean = false;
  @Input() set chartData(chartData: LineChartModel) {
    if (chartData) {
      this.lineChartMeasureData = chartData.measureDataSet;
      this.lineChartDimensionValue = chartData.dimensionValues;
      this.dimensionName = chartData.dimensionName;
      this.renderChart = true;
    }
  };

  lineChartType = 'line';
  lineChartOptions: (ChartOptions) = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

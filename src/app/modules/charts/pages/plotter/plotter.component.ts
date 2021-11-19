import { Component, OnInit } from '@angular/core';
import { ColumnModel } from '../../models/column.model';
import { CriteriaModel } from '../../models/criteria.model';
import { DataModel } from '../../models/data.model';
import { LineChartModel } from '../../models/line-chart.model';
import { PlotterService } from './plotter.service';

@Component({
  selector: 'app-plotter',
  templateUrl: './plotter.component.html',
  styleUrls: ['./plotter.component.scss']
})
export class PlotterComponent implements OnInit {
  columnList: ColumnModel[];
  lineChartData: LineChartModel;
  constructor(private plotterService: PlotterService) { }

  ngOnInit() {
    this.plotterService.getColumnsList().subscribe(columnList => {
      this.columnList = columnList;
    });
  }

  onCriteriaCompletion(criteriaModel: CriteriaModel) {
    this.plotterService.getCriteriaResult(criteriaModel).subscribe((criteriaResult: DataModel[]) => {
      this.lineChartData = this.plotterService.prepareLineChartData(criteriaResult, criteriaModel);
    });
  }
}

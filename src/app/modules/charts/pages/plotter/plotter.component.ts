import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/common/services/utils.service';
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
  constructor(private plotterService: PlotterService, private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.loadIndicator.emit(true);
    this.plotterService.getColumnsList().subscribe(columnList => {
      this.columnList = columnList;
      this.utilsService.loadIndicator.emit(false);
    });
  }

  onCriteriaCompletion(criteriaModel: CriteriaModel) {
    this.utilsService.loadIndicator.emit(true);
    this.plotterService.getCriteriaResult(criteriaModel).subscribe((criteriaResult: DataModel[]) => {
      this.lineChartData = this.plotterService.prepareLineChartData(criteriaResult, criteriaModel);
      this.utilsService.loadIndicator.emit(false);
    });
  }
}

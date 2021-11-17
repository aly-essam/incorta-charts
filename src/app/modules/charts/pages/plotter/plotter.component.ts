import { Component, OnInit } from '@angular/core';
import { ColumnModel } from '../../models/column.model';
import { ChartsService } from '../../services/charts.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-plotter',
  templateUrl: './plotter.component.html',
  styleUrls: ['./plotter.component.scss']
})
export class PlotterComponent implements OnInit {
  columnList: ColumnModel[];
  constructor(private chartsService: ChartsService) { }

  ngOnInit() {
    this.chartsService.getColumnsList().subscribe(columnList => {
      this.columnList = columnList;
    });
  }
}

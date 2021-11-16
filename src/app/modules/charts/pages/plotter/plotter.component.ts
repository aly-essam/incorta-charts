import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-plotter',
  templateUrl: './plotter.component.html',
  styleUrls: ['./plotter.component.sass']
})
export class PlotterComponent implements OnInit {

  constructor(private chartsService: ChartsService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { UtilsService } from './common/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'incorta-charts';
  showLoadingIndicator: boolean = false;

  constructor(private utilsService: UtilsService) {

  }

  ngOnInit(): void {
    this.utilsService.loadIndicator.subscribe((response) => {
      if (response) {
        this.showLoadingIndicator = true;
      } else {
        this.showLoadingIndicator = false;
      }
    });
  }
}

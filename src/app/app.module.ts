import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from './modules/charts/charts.module';
import { HttpErrorHandler } from './common/services/http-error-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from './common/services/utils.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [HttpErrorHandler, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

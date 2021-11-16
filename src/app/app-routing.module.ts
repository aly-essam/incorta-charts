import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlotterComponent } from './modules/charts/pages/plotter/plotter.component';

const routes: Routes = [  {
  path: '',
  redirectTo: '/plotter',
  pathMatch: 'full'
},
{
  path: 'plotter', component: PlotterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

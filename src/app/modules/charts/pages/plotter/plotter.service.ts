import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs/";
import { ColumnModel } from "../../models/column.model";
import { CriteriaModel } from "../../models/criteria.model";
import { DataModel } from "../../models/data.model";
import { DataRequestModel } from "../../models/data.request.model";
import { LineChartModel, MeasureData } from "../../models/line-chart.model";
import { ChartsService } from "../../services/charts.service";

@Injectable()
export class PlotterService {

    constructor(private chartsService: ChartsService) {

    }

    getColumnsList(): Observable<ColumnModel[]> {
        return this.chartsService.getColumnsList();
    }

    getCriteriaResult(criteriaModel: CriteriaModel): Observable<DataModel[] | DataRequestModel> {
        let measureColumnKeys: string[] = [];
        criteriaModel.measures.forEach(measure => measureColumnKeys.push(measure.name));
        return this.chartsService.getData({
            "measures": measureColumnKeys,
            "dimension": criteriaModel.dimension.name
        });
    }

    prepareLineChartData(criteriaResultData: DataModel[], criteriaModel: CriteriaModel): LineChartModel {
        let measureColumnKeys: string[] = [];
        criteriaModel.measures.forEach(measure => measureColumnKeys.push(measure.name));
        let lineChartModel: LineChartModel = new LineChartModel();
        /** prepare dimensions data */
        let dimensionResult: DataModel[] = criteriaResultData.filter(column => column.name == criteriaModel.dimension.name);
        if (dimensionResult && dimensionResult.length){
            lineChartModel.dimensionValues = dimensionResult[0].values;
            lineChartModel.dimensionName = dimensionResult[0].name;
        }
        /** prepare measures data */
        let measuresResult: DataModel[] = criteriaResultData.filter(column => measureColumnKeys.includes(column.name));
        let measureDataSet: MeasureData[] = [];
        measuresResult.forEach((measureData: DataModel) => {
            measureDataSet.push({ data: measureData.values, label: measureData.name });
        });
        lineChartModel.measureDataSet = measureDataSet;
        return lineChartModel;
    }
}
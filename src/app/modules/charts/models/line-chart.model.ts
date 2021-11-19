export class LineChartModel {
    measureDataSet: MeasureData[];
    dimensionValues: string[];
    dimensionName: string;
}
export class MeasureData {
    data: number[];
    label: string;
}
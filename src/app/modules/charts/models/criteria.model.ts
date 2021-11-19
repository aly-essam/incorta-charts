import { ColumnModel } from "./column.model";

export class CriteriaModel {
    dimension: ColumnModel;
    measures: ColumnModel[];

    constructor(dimension: ColumnModel, measures: ColumnModel[]) {
        this.dimension = dimension;
        this.measures = measures;
    }
}
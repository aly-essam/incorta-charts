import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

//import { Hero } from './hero';
import { HttpErrorHandler, HandleError } from 'src/app/common/services/http-error-handler.service';
import { ColumnModel } from '../models/column.model';
import { DataRequestModel } from '../models/data.request.model';
import { DataModel } from '../models/data.model';
import { BASE_PATH } from 'src/app/common/variables';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class ChartsService {
    private handleError: HandleError;
    private basePath: string;
    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler,
        @Inject(BASE_PATH) basePath: string) {
        this.handleError = httpErrorHandler.createHandleError('ChartsService');
        this.basePath = basePath;
    }

    /** GET columns list */
    getColumnsList(): Observable<ColumnModel[]> {
        return this.http.get<ColumnModel[]>(this.basePath+'/columns')
            .pipe(
                catchError(this.handleError('getColumnsList', []))
            );
    }

    /** POST: Get Data */
    getData(dataRequestModel: DataRequestModel): Observable<DataRequestModel | DataModel[]> {
        return this.http.post<DataRequestModel | DataModel[]>(this.basePath+'/data', dataRequestModel, httpOptions)
            .pipe(
                catchError(this.handleError('getData', dataRequestModel))
            );
    }
}

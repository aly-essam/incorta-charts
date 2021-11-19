import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class UtilsService {
    loadIndicator = new EventEmitter<boolean>();
    constructor() { }
}
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class PieChartService {

    private _urlRoot: string;

    constructor (private http: HttpClient, @Inject('_urlRoot') urlRoot: string) {
      this._urlRoot = urlRoot;
    }
  
    getNavigationData() {
      return this.http.get(this._urlRoot + '/api/BookOrg/GetNavigation');
    }

    getNowReadingData() {
      return this.http.get(this._urlRoot + '/api/BookOrg/GetNowReading');
    }

    getPieChartData() {
      return this.http.get(this._urlRoot + '/api/BookOrg/GetPieChart');
    }

    getTableColumnData() {
      return this.http.get(this._urlRoot + '/api/BookOrg/GetTableColumn');
    }

    getTableRowData() {
      return this.http.get(this._urlRoot + '/api/BookOrg/GetTableRow');
    }

    getUserData() {
      return this.http.get(this._urlRoot + '/api/BookOrg/GetUser');
    }
  }
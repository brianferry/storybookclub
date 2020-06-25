import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Module } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community/dist/ag-grid-community.js';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'bookorg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  public modules: Module[] = [ClientSideRowModelModule];
  private rowData;
  private columnDefs;
  private defaultColDef;
  private getRowHeight;

  constructor() { 
     this.rowData = [
      {
        athlete: 'Michael Phelps',
        age: 23,
        country: 'United States',
        year: 2008,
        date: '24/08/2008',
        sport: 'Swimming',
        gold: 8,
        silver: 0,
        bronze: 0,
        total: 8,
      },
      {
        athlete: 'Michael Phelps',
        age: 19,
        country: 'United States',
        year: 2004,
        date: '29/08/2004',
        sport: 'Swimming',
        gold: 6,
        silver: 0,
        bronze: 2,
        total: 8,
      },
      {
        athlete: 'Michael Phelps',
        age: 27,
        country: 'United States',
        year: 2012,
        date: '12/08/2012',
        sport: 'Swimming',
        gold: 4,
        silver: 2,
        bronze: 0,
        total: 6,
      },
      {
        athlete: 'Natalie Coughlin',
        age: 25,
        country: 'United States',
        year: 2008,
        date: '24/08/2008',
        sport: 'Swimming',
        gold: 1,
        silver: 2,
        bronze: 3,
        total: 6,
      },
      {
        athlete: 'Aleksey Nemov',
        age: 24,
        country: 'Russia',
        year: 2000,
        date: '01/10/2000',
        sport: 'Gymnastics',
        gold: 2,
        silver: 1,
        bronze: 3,
        total: 6,
      }
    ];
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 150,
      },
      {
        field: 'age',
        minWidth: 70,
        maxWidth: 90,
      },
      {
        field: 'country',
        minWidth: 130,
      },
      {
        field: 'year',
        minWidth: 70,
        maxWidth: 90,
      },
      {
        field: 'date',
        minWidth: 120,
      },
      {
        field: 'sport',
        minWidth: 120,
      },
      {
        field: 'gold',
        minWidth: 80,
      },
      {
        field: 'silver',
        minWidth: 80,
      },
      {
        field: 'bronze',
        minWidth: 80,
      },
      {
        field: 'total',
        minWidth: 80,
      },
    ];
    this.defaultColDef = { resizable: true };
    this.getRowHeight = function() {
      return currentRowHeight;
    };
  }
  

  onFirstDataRendered(params) {
    if (this.onGridSizeChanged) {
      this.onGridSizeChanged(params);
    }
  }

  onGridSizeChanged(params) {
    var agBodyViewportHTMLElement = document.getElementsByClassName('ag-body-viewport')[0] as HTMLElement;
    
    if(agBodyViewportHTMLElement !== undefined){
      var gridHeight = agBodyViewportHTMLElement.offsetHeight;
      var renderedRows = params.api.getRenderedNodes();
      if (renderedRows.length * minRowHeight >= gridHeight) {
        if (currentRowHeight !== minRowHeight) {
          currentRowHeight = minRowHeight;
          params.api.resetRowHeights();
        }
      } else {
        currentRowHeight = Math.floor(gridHeight / renderedRows.length);
        params.api.resetRowHeights();
      }
    }
   
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    minRowHeight = params.api.getSizesForCurrentTheme().rowHeight;
    currentRowHeight = minRowHeight;
    params.api.sizeColumnsToFit();
  }

  

}

var minRowHeight = 25;
var currentRowHeight;
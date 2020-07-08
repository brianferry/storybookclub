import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
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

  @Input() columnDefs: [] = [];

  @Input() rowData: [] = [];
  defaultColDef;
  getRowHeight;

  constructor() { 
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
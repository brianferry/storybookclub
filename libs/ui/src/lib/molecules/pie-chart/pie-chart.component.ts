import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { PieChartDataModel } from '../../../models/PieChartModel';
import { Observable, from } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../+state/ui/ui.selectors';
import { UiPartialState } from '../../+state/ui/ui.reducer';

@Component({
  selector: 'bookorg-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() showLabels: boolean = true;

  chartData$: Observable<PieChartDataModel[]>;

  _colorScheme: any;

  @Input()
  set colorScheme(colors: string[]){
    this._colorScheme = {
      domain: colors
    }
  }

  

  constructor(private store: Store<UiPartialState>) {
  }

  ngOnInit(): void {
    this.chartData$ = this.store.select(fromRoot.getPieChartData);
  }
}

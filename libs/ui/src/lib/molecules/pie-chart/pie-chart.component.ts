import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { PieChartModel } from '../../../models/PieChartModel';

@Component({
  selector: 'bookorg-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PieChartComponent implements OnInit {
  @Input() ChartModel: PieChartModel;

  _calculatedColorScheme = {
    domain: [""]
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}

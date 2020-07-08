import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { NavBarModel } from 'libs/ui/src/models/NavBarModel';
import { User } from 'libs/ui/src/models/UserModel';
import { NowReadingModel } from 'libs/ui/src/models/NowReadingModel';
import { PieChartModel } from 'libs/ui/src/models/PieChartModel';

@Component({
  selector: 'bookorg-home-page-wrapper-pure',
  templateUrl: './home-page-wrapper-pure.component.html',
  styleUrls: ['./home-page-wrapper-pure.component.scss']
})
export class HomePageWrapperPureComponent implements OnInit {

  @Input() Title: string = "";

  @Input() NavBar: NavBarModel[] = [];
  @Input() User: User;
  @Input() NowReading: NowReadingModel;

  @Input() ColumnDefs: any;
  @Input() RowData: any;

  @Input() ChartData: PieChartModel;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
